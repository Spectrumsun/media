import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Footer from './Footer';

const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const getRequest =  async () => await (await fetch(url)).json();

const MediaContainer = ({ type }) => {
  const { data, isFetching, error } = useQuery('fetchData', getRequest); 
  return (
    <>
    <SeriesWrapper>
      {error !== null && (
    <h3>Oops something went wrong..</h3>
      )}
    {
      isFetching ? 
      (<h3>Loading...</h3>) :
      (
        <div className="image-cover">
            {data.entries.filter((arr) => arr.releaseYear >= 2010 && arr.programType === type)
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((v, index) => <MovieCard data={v} key={index}/>)
            }
        </div>
      )
 
    }
    </SeriesWrapper>
      <Footer />
    </>
  );
}


const SeriesWrapper = styled.div`
    margin: 70px auto;
    width: 70%;
    margin-bottom: 50px;
    .image-cover {
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      height:400px;
      justify-content: space-between;
    }
    
    .image-cover img {
      height:auto;
      display:block;
      width: 250px;
    }

    @media screen and (max-width: 1872px) {
      .image-cover img {
        width: 200px;
      }
    }

    @media screen and (max-width: 1872px) {
      .image-cover img {
        width: 200px;
      }
    }


    @media screen and (max-width: 1590px) {
      .image-cover img {
        width: 190px;
      }
    }

    @media screen and (max-width: 1451px) {
      .image-cover img {
        width: 150px;
      }
    }


    @media screen and (max-width: 983px) {
      .image-cover img {
        width: 120px;
      }
    }


    @media screen and (max-width: 800px) {
      .image-cover img {
        width: 100px;
      }
    }

    @media screen and (max-width: 512px) {
      .image-cover img {
        width: 150px;
      }
    }


    @media screen and (max-width: 487px) {
      .image-cover img {
        width: 100px;
      }
    }


    @media screen and (max-width: 389px) {
      .image-cover img {
        width: 80px;
      }
    }



    

`;

export default MediaContainer;
