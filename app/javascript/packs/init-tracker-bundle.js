import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/InitTracker/components/InitTracker';

// This is how react_on_rails can see the InitTracker in the browser.
ReactOnRails.register({
  InitTracker,
});
