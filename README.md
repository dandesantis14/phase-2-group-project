# Beat Sequencer Application

Authors:
Holly Teunis
Webster Bian
Daniel DeSantis


## Intended Structure

#### App houses:
**Header** - Stores Logo.

**MainContainer** - Houses substance of application.

#### MainContainer houses:
**MusicBuilder** - Houses music construction portion of application.

**MySounds** - Houses saved songs/sounds user has created and saved.

#### MySounds houses:
**SavedSound** - Each *SavedSound* component represents a completed and saved song/sound from user.

#### MusicBuilder houses:
**Controls** - Houses ability to control active music, add sounds groups, and save completed sounds.

**SoundGroup** - Components that are used for sound building.

#### Controls houses:
**Controller** - Houses play/pause ability, and bpm settings.

**AddForm** - Houses ability to select from different *SoundGroups* and add one to *MusicBuilder*.

**SaveForm** - Houses ability to save all active SoundGroups into a single stored .mp3 with current active settings.

#### SoundGroup houses:
Ability to set up to 16(may change +/-) consectutive beats, *for each available sound from that group* (e.g. DrumGroup = [snare,kick,tom,floorTom]). Set beats will be represented by grid of lit tiles.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

