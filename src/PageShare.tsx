import { useEffect, useState } from 'react';
import { Facebook } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FaLine } from 'react-icons/fa';
import { green } from '@mui/material/colors';

const PageShare = () => {
  const [pageLink, setPageLink] = useState('');

  useEffect(() => {
    const url = window.location.href;
    setPageLink(url);
  }, []);

  const shareOnFacebookLink = `https://facebook.com/sharer/sharer.php?u=${pageLink}`;
  const shareOnLineLink = `https://social-plugins.line.me/lineit/share?url=${pageLink}`;

  return (
    <>
      <Button
        variant="text"
        href={shareOnFacebookLink}
        size="small"
        sx={{
          minWidth: 'auto'
        }}
      >
        <Facebook fontSize="large" />
      </Button>
      <Button
        variant="text"
        href={shareOnLineLink}
        size="small"
        sx={{ minWidth: 'auto' }}
      >
        <FaLine color={green['500']} fontSize={30} />
      </Button>
    </>
  );
};

export default PageShare;
