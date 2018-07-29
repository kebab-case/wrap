import { Component, OnInit } from '@angular/core';

let player;

const token = 'foo';

@Component({
  selector: 'spotify-card',
  templateUrl: './spotify-link.component.html',
  styleUrls: ['./spotify-link.component.css']
})
export class SpotifyLinkComponent implements OnInit {
  public trackID: string;

  constructor() { }

  ngOnInit() {
    this.trackID =  '1nbMkRhfldXcmCyB83x8lK';

    const redirect_uri = 'localhost:4200'
    var scopes = 'user-read-private user-read-email';
  //   window.location = 'https://accounts.spotify.com/authorize' +
  // '?response_type=code' +
  // '&client_id=' + 'foo' +
  // (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  // '&redirect_uri=' + encodeURIComponent(redirect_uri));

  },

  play() {
    console.log('tjohej');
    const Authorization = token;
    fetch('https://api.spotify.com/v1/me/player/play', {
      method: 'PUT',
      headers: {Authorization},
      uris: ['spotify:track:6vgUhgKdNjmcse3wQVLluI']
    });
  }

}

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = token;
  player = new Spotify.Player({
    name: 'Wrap',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.on('initialization_error', e => { console.error(e); });
  player.on('authentication_error', e => { console.error(e); });
  player.on('account_error', e => { console.error(e); });
  player.on('playback_error', e => { console.error(e); });

  // Playback status updates
  player.on('player_state_changed', state => { console.log(state); });

  // Ready
  player.on('ready', data => {
    let { device_id } = data;
    console.log('Ready with Device ID', device_id);
  });

  // Connect to the player!
  player.connect();
}
