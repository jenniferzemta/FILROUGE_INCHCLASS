import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const departmentService = {
  async getAll() {
    try {
      const response = await axios.get(`${API_URL}/departments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching departments:', error);
      return [];
    }
  }
};