import { Request } from '@/networking';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CallBack() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const code = params.get('code');
        const scope = params.get('scope');
        const authuser = params.get('authuser');
        const hd = params.get('hd');
        const prompt = params.get('prompt');

        Request('GET', `auth/google/callback?code=${code}&scope=${scope}&authuser=${authuser}&hd=${hd}&prompt${prompt}`)
            .then((response) => {
                const data = response.data;

                const token = data.token;
                const redirectUrl = data.redirect_url;

                // Store the token securely
                localStorage.setItem('tocopass', token);

                // Redirect to your dashboard or another page
                window.location.href = redirectUrl;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [location.search]);

    return <>Signing You in...</>;
}
