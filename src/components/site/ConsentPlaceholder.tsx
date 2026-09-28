import { Cookie } from 'lucide-react';
import { openCookiePreferences } from '../../lib/consent';

export default function ConsentPlaceholder({ label }: { label: string }) {
  return (
    <div className="consent-placeholder">
      <Cookie aria-hidden="true" />
      <p>{label} is provided by a third party and loads only after you allow functional cookies.</p>
      <button type="button" className="button button-secondary" onClick={openCookiePreferences}>
        Cookie settings
      </button>
    </div>
  );
}
