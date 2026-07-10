import type {ChangeEvent, FormEvent, ReactNode} from 'react';
import {useState} from 'react';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {send} from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Layout from '@theme/Layout';

type FormData = {
  email: string;
  message: string;
  name: string;
  title: string;
};

type FormErrors = Record<keyof FormData, boolean>;

type CustomFields = {
  emailjsPublicKey?: string;
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  title: '',
  message: '',
};

export default function ContactForm(): ReactNode {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const history = useHistory();
  const emailConfig = customFields as CustomFields;
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    email: false,
    title: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData((current) => ({...current, [name]: value}));
    if (formErrors[name as keyof FormData]) {
      setFormErrors((current) => ({...current, [name]: false}));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      name: formData.name.trim() === '',
      title: formData.title.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === '',
    };

    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;

    const {emailjsPublicKey, emailjsServiceId, emailjsTemplateId} = emailConfig;
    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    try {
      await send(emailjsServiceId, emailjsTemplateId, formData, emailjsPublicKey);
      history.push('/thank-you');
    } catch {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="問合せ" description="虎威サポートへのお問い合わせ">
      <Container maxWidth="md" sx={{pt: 5, pb: 8}}>
        <Box sx={{mb: 4, textAlign: 'center'}}>
          <Typography variant="h3" component="h1" gutterBottom>
            問合せ
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ご不明な点、ご質問がございましたら、お気軽にお問い合わせください。
          </Typography>
        </Box>

        <Paper elevation={3} sx={{p: {xs: 2, sm: 4}, borderRadius: 2}}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{xs: 'column', sm: 'row'}} spacing={3}>
                <FormControl fullWidth error={formErrors.name}>
                  <InputLabel htmlFor="name" required>
                    お名前
                  </InputLabel>
                  <OutlinedInput
                    id="name"
                    name="name"
                    label="お名前"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.name && (
                    <FormHelperText>お名前を入力してください。</FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth error={formErrors.email}>
                  <InputLabel htmlFor="email" required>
                    メールアドレス
                  </InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    label="メールアドレス"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {formErrors.email && (
                    <FormHelperText>有効なメールアドレスを入力してください。</FormHelperText>
                  )}
                </FormControl>
              </Stack>

              <TextField
                fullWidth
                required
                error={formErrors.title}
                helperText={formErrors.title ? '件名を入力してください。' : ''}
                id="title"
                name="title"
                label="件名"
                value={formData.title}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                required
                error={formErrors.message}
                helperText={formErrors.message ? '問合せ内容をお書きください。' : ''}
                id="message"
                name="message"
                label="問合せ内容"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}
                fullWidth
                endIcon={<SendIcon />}
                sx={{py: 1.5}}>
                {isSubmitting ? '送信中...' : '送信'}
              </Button>
            </Stack>
          </Box>
        </Paper>

        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
          <Alert
            onClose={() => setShowError(false)}
            severity="error"
            variant="filled"
            sx={{width: '100%'}}>
            メール送信中にエラーが発生しました。ページをリロード後に再度お試しください。
          </Alert>
        </Snackbar>
      </Container>
    </Layout>
  );
}
