import { Trans } from '@lingui/macro';

import { Link, Section, Text } from '../components';
import { useBranding } from '../providers/branding';

export type TemplateFooterProps = {
  isDocument?: boolean;
};

export const TemplateFooter = ({ isDocument = true }: TemplateFooterProps) => {
  const branding = useBranding();

  return (
    <Section>
      {isDocument && !branding.brandingHidePoweredBy && (
        <Text className="my-4 text-base text-slate-400">
          <Trans>
            This document was sent using{' '}
            <Link className="text-[#7AC455]" href="https://0xmetalabs.com/">
              0xDocHub by 0xMetaLabs.
            </Link>
          </Trans>
        </Text>
      )}

      {branding.brandingCompanyDetails ? (
        <Text className="my-8 text-sm text-slate-400">
          {branding.brandingCompanyDetails.split('\n').map((line, idx) => {
            return (
              <>
                {idx > 0 && <br />}
                {line}
              </>
            );
          })}
        </Text>
      ) : (
        <Text className="my-8 text-sm text-slate-400">
          0xMetaLabs.
          <br />
          INDIA - UAE - USA
        </Text>
      )}
    </Section>
  );
};

export default TemplateFooter;
