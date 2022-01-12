import { useContext } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import SubscriberInfoContext from '../context/SubscriberInfoContext';

const options = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('x-access-token')}`,
};

const URL = 'http://localhost:8080';

const { setDecodedToken, setSubscriberInfo, setRecipientsInfo } = useContext(SubscriberInfoContext);

const createSubscriberAccount = async (data) => {
  const subscriberCreated = await axios.post(`${URL}`, data);
  return subscriberCreated;
};

const logIn = async (data) => {
  const token = await axios.post(`${URL}/auth/login`, data);
  localStorage.setItem('x-access-token', token.data);
  setDecodedToken(jwt(token));
};

const getSubscriberInfo = async (id) => {
  const [subscriber] = await axios.get(`${URL}/subscriber/${id}`, options);
  setSubscriberInfo(subscriber);
};

const createRecipient = async (data) => {
  const recipient = await axios.post(`${URL}/recipients`, data, options);
  return recipient;
};

const getRecipients = async (id) => {
  const [recipients] = await axios.get(`${URL}/recipients/${id}`, options);
  setRecipientsInfo(recipients);
};

module.exports = {
  logIn,
  createSubscriberAccount,
  getSubscriberInfo,
  createRecipient,
  getRecipients,
};
