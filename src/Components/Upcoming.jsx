import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import styled from 'styled-components'
import Sidebar from './Sidebar'

function Upcoming({rendered}) {
    const {upcomingAnime ,isSearch, searchResults} = useGlobalContext()

    const conditionalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.webp.large_image_url} alt="Anime Image" />
                </Link>
            })
        }else{
            return searchResults?.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.webp.large_image_url} alt="Anime Image" />
                </Link>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <Sidebar />
        </PopularStyled>
    )
}

const PopularStyled = styled.div`
    display: flex;

    .upcoming-anime {
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 3rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 2rem;
        background-color: #fff;
        border-top: 5px solid #e5e7eb;

        a {
            height: 500px;
            border-radius: 7px;
            border: 5px solid #e5e7eb;
        }

        a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 768px) {
        .upcoming-anime {
            padding-left: 2rem;
            padding-right: 2rem;
            grid-gap: 1rem;

            a {
                height: 300px;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .upcoming-anime {
            padding-left: 1rem;
            padding-right: 1rem;

            a {
                height: 200px;
            }
        }
    }
`;


export default Upcoming
