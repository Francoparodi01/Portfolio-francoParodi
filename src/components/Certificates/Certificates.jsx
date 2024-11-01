import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import styled from '@emotion/styled';
import js from '../../assets/js.jpg';
import react from '../../assets/react.jpg';
import igcse from '../../assets/igcse.png';

const CertificatesContainer = styled(Container)(({ theme }) => ({
    padding: '2rem 0',
    textAlign: 'center',
    marginTop: '16rem',
    [theme.breakpoints.down('sm')]: {
        marginTop: '70rem',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: '2rem',
    fontWeight: 700,
    color: '#00339b',
    fontSize: '2rem',
}));

const CertificateCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: '1rem',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    cursor: 'pointer',
}));

const CertificateMedia = styled(CardMedia)( {
    height: 200,
});

const handleImageClick = (imageSrc) => {
    const imageWindow = window.open("");
    imageWindow.document.write(`<img src="${imageSrc}" style="width:100%">`);
};

const Certificates = () => {
    const certificates = [
        { id: 1, image: js, title: 'JavaScript Certificate', description: 'Certified JavaScript Developer' },
        { id: 2, image: react, title: 'React Certificate', description: 'Certified React Developer' },
        { id: 3, image: igcse, title: 'IGCSE Certificate', description: 'IGCSE Certified' },
    ];

    return (
        <CertificatesContainer>
            <Title variant="h4" component="h2">
                Mis certificados
            </Title>
            <Grid container spacing={3} justifyContent="center">
                {certificates.map((cert) => (
                    <Grid item key={cert.id} xs={12} sm={6} md={4}>
                        <CertificateCard>
                            <CertificateMedia
                                component="img"
                                image={cert.image}
                                alt={cert.title}
                                onClick={() => handleImageClick(cert.image)} 
                            />
                            <CardContent>
                                <Typography variant="h6" component="h3">
                                    {cert.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {cert.description}
                                </Typography>
                            </CardContent>
                        </CertificateCard>
                    </Grid>
                ))}
            </Grid>
        </CertificatesContainer>
    );
};

export default Certificates;
