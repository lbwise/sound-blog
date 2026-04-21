import GitHub from '../components/embeds/GitHubCard.astro';
import Gist from '../components/embeds/Gist.astro';
import Notebook from '../components/embeds/Notebook.astro';
import Note from '../components/embeds/Note.astro';
import Audio from '../components/embeds/Audio.astro';
import AppleMusic from '../components/embeds/AppleMusic.astro';

// Components available by name in any MDX post/build/review.
// e.g.  <GitHub url="..."/>,  <Note>...</Note>,  <AppleMusic url="..."/>
export const postComponents = {
  GitHub,
  GitHubCard: GitHub,
  Gist,
  Notebook,
  Note,
  Audio,
  AppleMusic,
};
