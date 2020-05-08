import React from 'react';
import { MDBRow, MDBCol, MDBFormInline } from "mdbreact";


export function DisplayData({data}) {
    console.log(data);
    return (
      <MDBRow>
        <MDBFormInline className="text-center my-auto">
        {data.results.map(function(result, index) {
            if (result.poster_path) {
              return ( 
                    <MDBCol key = {index} md="3" xs = "12" className="my-md-3 my-xs-1 text-center pt-3">
                      <h3>{result.title || result.name || result.original_name }</h3>
                      <p>{result.overview || "Nie znaleziono opisu w bazie danych."}</p>

                      <img src = {`https://image.tmdb.org/t/p/w300/${result.poster_path}`} alt="Plakat filmu"></img>
                    </MDBCol> )
          } else {
            return ( 
              <MDBCol key = {index} md="3" xs = "12" className="my-md-3 my-xs-1 text-center pt-3">
                <h3>{result.title || result.name || result.original_name }</h3>
                <p>{result.overview || "Nie znaleziono opisu w bazie danych."}</p>

                <img src = {require('../img/empty_poster.jpg')} alt="Film bez plakatu"></img>
              </MDBCol> )
          }})}
          </MDBFormInline>
        </MDBRow>
    )
  }