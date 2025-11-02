import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../auth/authService';

const AdminLoginPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/admin/dashboard';

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (authService.login(password)) {
            navigate(from, { replace: true });
        } else {
            setError('Nieprawidłowe hasło. Spróbuj ponownie.');
        }
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-base">
            <div className="w-full max-w-md p-8 space-y-6 bg-surface rounded-2xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary">Logowanie Admina</h1>
                    <p className="text-on-surface-variant">Wprowadź hasło, aby uzyskać dostęp do panelu.</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-on-surface-variant">
                            Hasło
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-surface-container border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Zaloguj się
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;