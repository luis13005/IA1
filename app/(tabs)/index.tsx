import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import { Login } from '@/src/types/login';
import { useState } from 'react';

export default function TelaLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(!email.trim() || !password.trim()){
            Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
            return;
        }

        const login: Login = {email: email,password: password}

        Alert.alert(`Login', 'Bem vindo, ${login.email}!`);
    };

    const handleEsqueceuSenha = () => {
        Alert.alert('Recuperar Senha', 'Funcionalidade em breve!');
    };

    const handleCadastro = () => {
        Alert.alert('Cadastro', 'Tela de cadastro em breve!');
    };

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <View style={styles.conteudo}>

            <View style={styles.logoContainer}>
            <Image
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.nomeApp}>MeuApp</Text>
            </View>

            <Text style={styles.subtitulo}>Faça login para continuar</Text>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="seuemail@exemplo.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            </View>

            <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            </View>

            <TouchableOpacity
            style={styles.esqueceuSenha}
            onPress={handleEsqueceuSenha}
            >
            <Text style={styles.esqueceuSenhaTexto}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.botaoLogin}
            onPress={handleLogin}
            >
            <Text style={styles.botaoLoginTexto}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.cadastroContainer}>
            <Text style={styles.cadastroTexto}>Não tem uma conta?{' '}</Text>
            <TouchableOpacity onPress={handleCadastro}>
                <Text style={styles.cadastroLink}>Cadastre-se</Text>
            </TouchableOpacity>
            </View>

        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  conteudo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },

  logo: {
    width: 80,
    height: 80,
  },

  nomeApp: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 8,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },

  inputContainer: {
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#333',
  },

  esqueceuSenha: {
    alignSelf: 'flex-end',
    marginBottom: 24,
    marginTop: 4,
  },

  esqueceuSenhaTexto: {
    color: '#007AFF',
    fontSize: 14,
  },

  botaoLogin: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  botaoLoginTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cadastroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cadastroTexto: {
    color: '#666',
    fontSize: 14,
  },

  cadastroLink: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});