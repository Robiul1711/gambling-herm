import React from 'react';
import UrgentHelpContent from '@/components/urgentHelpComponents/UrgentHelpContent';
import UrgentHelpTips from '@/components/urgentHelpComponents/UrgentHelpTips';
import UrgentHelpBereavement from '@/components/urgentHelpComponents/UrgentHelpBereavement';

const UrgentHelp = () => {
  return (
    <div className="w-full">
      <UrgentHelpContent />
      <UrgentHelpTips />
      <UrgentHelpBereavement />
    </div>
  );
};

export default UrgentHelp;
