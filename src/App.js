import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import BirdSearch from './BirdSearch.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var BIRDS = [
      {
        id: "rhea-americana",
        commonName: "Greater Rhea",
        scientificName: "Rhea americana",
        familyName: "Rheidae",
        family: "Rheas",
        order: "Struthioniformes",
        alternativeNames: [
          "Common Rhea",
          "Avestruz",
          "Ñandú",
          "Ñandú Común"
        ],
        createdAt: "2017-03-07T09:19:02.799Z",
        updatedAt: "2017-03-07T09:19:02.799Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/rhea-americana"
        }
      },
      {
        id: "struthio-molybdophanes",
        commonName: "Somali Ostrich",
        scientificName: "Struthio molybdophanes",
        familyName: "Struthionidae",
        family: "Ostriches",
        order: "Struthioniformes",
        alternativeNames: [],
        createdAt: "2017-03-07T09:19:02.805Z",
        updatedAt: "2017-03-07T09:19:02.805Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/struthio-molybdophanes"
        }
      },
      {
        id: "struthio-camelus",
        commonName: "Common Ostrich",
        scientificName: "Struthio camelus",
        familyName: "Struthionidae",
        family: "Ostriches",
        order: "Struthioniformes",
        alternativeNames: [],
        createdAt: "2017-03-07T09:19:02.808Z",
        updatedAt: "2017-03-07T09:19:02.808Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/struthio-camelus"
        }
      },
      {
        id: "rhea-tarapacensis",
        commonName: "Puna Rhea",
        scientificName: "Rhea tarapacensis",
        familyName: "Rheidae",
        family: "Rheas",
        order: "Struthioniformes",
        alternativeNames: [],
        createdAt: "2017-03-07T09:19:02.827Z",
        updatedAt: "2017-03-07T09:19:02.827Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/rhea-tarapacensis"
        }
      },
      {
        id: "rhea-pennata",
        commonName: "Lesser Rhea",
        scientificName: "Rhea pennata",
        familyName: "Rheidae",
        family: "Rheas",
        order: "Struthioniformes",
        alternativeNames: [],
        createdAt: "2017-03-07T09:19:02.830Z",
        updatedAt: "2017-03-07T09:19:02.830Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/rhea-pennata"
        }
      },
      {
        id: "nothocercus-bonapartei",
        commonName: "Highland Tinamou",
        scientificName: "Nothocercus bonapartei",
        familyName: "Tinamidae",
        family: "Tinamous",
        order: "Struthioniformes",
        alternativeNames: [],
        createdAt: "2017-03-07T09:19:02.979Z",
        updatedAt: "2017-03-07T09:19:02.979Z",
        links: {
          self: "https://api.birdr.co.uk/v1/birds/nothocercus-bonapartei"
        }
      }
    ];

    return (
      <div className="App">
        <Grid centered container>
          <Grid.Row>
            <Grid.Column>
              <img src={logo} alt="Birdr logo" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container>
          <BirdSearch birds={BIRDS} />
        </Container>
      </div>
    );
  }
}

export default App;
