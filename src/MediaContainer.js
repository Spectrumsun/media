import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Footer from './Footer';

const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

const getRequest =  async () => await (await fetch(url)).json();

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
            .map((v, index) => <MovieCard data={v} index={index}/>)
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
    }
    
    .image-cover img {
      height:auto;
      display:block;
      width: 200px;
    }
  

`;

export default MediaContainer;
