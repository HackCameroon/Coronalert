import React from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';
import "./LocationInput.css"

// add current location: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

class LocationInput extends React.Component {
  /**
   * When the input receives focus
   */
  onFocus(): void {
    console.log('onFocus');
  }

  /**
   * When the input loses focus
   */
  onBlur(value?: string): void {
    console.log('onBlur', value);
  }

  /**
   * When the input got changed
   */
  onChange(value: string) {
    console.log('input changes to :' + value);
  }

  /**
   * When a suggest got selected
   */
  onSuggestSelect(suggest: any) {
    console.log(suggest);
  }

  /**
   * When there are no suggest results
   */
  onSuggestNoResults(userInput: string) {
    console.log('onSuggestNoResults for :' + userInput);
  }

  /**
   * Render the example app
   * @return {Function} React render function
   */
  render(){
    const fixtures = [
      {label: 'New York', location: {lat: 40.7033127, lng: -73.979681}},
      {label: 'Rio', location: {lat: -22.066452, lng: -42.9232368}},
      {label: 'Tokyo', location: {lat: 35.673343, lng: 139.710388}}
    ];

    return (
      <div>
        <Geosuggest
          fixtures={fixtures}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onSuggestSelect={this.onSuggestSelect}
          onSuggestNoResults={this.onSuggestNoResults}
          location={new window.google.maps.LatLng(53.558572, 9.9278215)}
          country="us"
          radius="20"
        />
      </div>
    );
  }
}

export default LocationInput