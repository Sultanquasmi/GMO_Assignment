import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import "./firstcomponent.css";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FirstComponent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  const rows = posts.map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  return (
   <Box className="first_component_box">
     <div style={{ height: 475, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
   </Box>
  );
};

export default FirstComponent;
