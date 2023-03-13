import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import qs from 'qs';
import axios from 'axios';

export const uselineLogin = defineStore('lineLogin', () => {

  //跳轉驗證網址
  function lineLoginBtn() {
    let URL = 'https://access.line.me/oauth2/v2.1/authorize?';
    URL += 'response_type=code';
    URL += `&client_id=${import.meta.env.VITE_Client_Id_Line}`;
    URL += '&redirect_uri=http://192.168.1.151:8088/login';
    URL += '&state=12345abcde';
    URL += '&prompt=consent';
    URL += '&scope=profile%20openid';
    window.location.href = URL;
  }
  //擷取跳轉回的網址數據
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const code = query.code;
  const state = query.state;

  //如果state值相同 則獲取access_token
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: `${import.meta.env.VITE_Client_Id_Line}`,
      password: `${import.meta.env.VITE_Client_Secret_Line}`,
    },
  };
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://192.168.1.151:8088/login',
  };
  const access_token = ref('')
  if (state === '12345abcde') {
    axios.post('https://api.line.me/oauth2/v2.1/token', qs.stringify(data), config)
      .then(response => {
        access_token.value = response.data.access_token;
      })
      .catch(error => {
        console.log(error);
      });
  }

  return { lineLoginBtn, access_token }
})
