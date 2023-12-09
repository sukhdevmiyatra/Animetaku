import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';

function Gallery() {
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id} = useParams();

    //state
    const [index, setIndex] = React.useState(0);

    const handleImageClick = (i) => {
        setIndex(i)
    }


    React.useEffect(() => {
        getAnimePictures(id)
    }, [id])

    return (
        <GalleryStyled>
            <div className="back">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Back to Home
                </Link>
            </div>
            <div className="big-image">
                <img src={pictures[index]?.jpg.image_url} alt="Anime Image" />
            </div>
            <div className="small-images">
                {pictures?.map((picture, i) => {
                    return <div className="image-con" onClick={()=>{
                        handleImageClick(i)
                    }} key={i}>
                        <img 
                            src={picture?.jpg.image_url}
                            style={{
                                border: i === index ? "3px solid #27AE60" : "3px solid #e5e7eb",
                                filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                                transform: i === index ? 'scale(1.1)' : 'scale(1)',
                                transition: 'all .3s ease-in-out'
                            }}
                            alt="" 
                        />
                    </div>
                })}
            </div>
        </GalleryStyled>
    )
}

const GalleryStyled = styled.div`
    background-color: #EDEDED;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .back {
        position: absolute;
        top: 2rem;
        left: 2rem;

        a {
            font-weight: 600;
            text-decoration: none;
            color: #EB5757;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }

    .big-image {
        display: inline-block;
        padding: 2rem;
        margin: 4rem 0;
        background-color: #fff;
        border-radius: 7px;
        border: 5px solid #e5e7eb;
        position: relative;

        img {
            width: 100%; /* Adjusted to make it responsive */
            max-width: 350px; /* Added to limit the maximum width */
        }
    }

    .small-images {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 7px;
        background-color: #fff;
        border: 5px solid #e5e7eb;

        img {
            width: 100%; /* Adjusted to make it responsive */
            max-width: 6rem; /* Added to limit the maximum width */
            height: auto; /* Maintains aspect ratio */
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            border: 3px solid #e5e7eb;
        }
    }

    @media screen and (max-width: 768px) {
        .small-images {
            width: 100%; /* Make the small-images full-width on smaller screens */
        }
    }

    @media screen and (max-width: 480px) {
        .big-image {
            img {
                max-width: 100%; /* Make the big-image full-width on even smaller screens */
            }
        }
    }
`;


export default Gallery
