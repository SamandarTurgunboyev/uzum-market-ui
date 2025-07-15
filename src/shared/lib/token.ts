import Cookie from 'js-cookie';

type accessToken = 'uzum-acc';
type refreshToken = 'uzum-ref';

const expiresIn = 7; // 7 kun save qilinadi
// SAVE TOKEN
export const saveAccToken = (key: accessToken, data: string) => {
  Cookie.set(key, data, { expires: expiresIn });
};

export const saveRefToken = (key: refreshToken, data: string) => {
  Cookie.set(key, data, { expires: expiresIn });
};

// GET TOKEN
export const getAccToken = (key: accessToken) => {
  const data = Cookie.get(key);
  return data ? data : null;
};

// GET REFRESH TOKEN
export const getRefToken = (key: refreshToken) => {
  const data = Cookie.get(key);
  return data ? data : null;
};

// DELETE TOKEN
export const removeAccToken = (key: accessToken) => {
  Cookie.remove(key);
};

export const removeRefToken = (key: refreshToken) => {
  Cookie.remove(key);
};
