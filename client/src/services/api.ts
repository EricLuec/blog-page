import axios from 'axios';
const apiUrl = 'https://localhost:8080';

export const getBlogEntries = async () => {
    const response = await axios.get(`${apiUrl}/blogEntries`);
    return response.data;
};

/*
export const getUser = async (id) => {
    const response = await axios.get(`${apiUrl}/users/${id}`);
    return response.data;
};

export const createBlogEntry = async (blogEntry) => {
    const response = await axios.post(`${apiUrl}/blogEntry`, blogEntry);
    return response.data;
};

export const updateUser = async (id, user) => {
    const response = await axios.put(`${apiUrl}/users/${id}`, user);
    return response.data;
};

export const deleteUser = async (id) => {
    await axios.delete(`${apiUrl}/users/${id}`);
}
 */