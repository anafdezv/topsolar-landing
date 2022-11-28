import { CompatibleEnergyIcon } from '@/assets/icons/CompatibleEnergyIcon';
import { EnergySavingIcon } from '@/assets/icons/EnergySavingIcon';
import { NoiseFreeIcon } from '@/assets/icons/NoiseFreeIcon';
import { ZeroEmissionsIcon } from '@/assets/icons/ZeroEmissionsIcon';

export interface AdvantagesInfoProps {
  title: string;
  icon: JSX.Element;
  description: string;
}

export const advantagesInfo: AdvantagesInfoProps[] = [
  {
    title: 'Zero emissions',
    icon: ZeroEmissionsIcon,
    description:
      'The main attraction of solar energy is that, unlike other sources, it does not generate polluting emissions either directly or indirectly. Once you install the solar kit on your home, there will be no more greenhouse gas emissions. This is a good reason to opt for the installation of these devices.',
  },
  {
    title: 'Energy saving',
    icon: EnergySavingIcon,
    description:
      'The installation of photovoltaic (PV) panels is an initial costly investment, but in the medium term the energy savings achieved are already very high. Your electricity bill will be cheaper and, in addition, with bi-directional meters you will have the possibility of returning the energy you do not use and "reselling" it. This is an option for anyone who wants to save on energy consumption.',
  },
  {
    title: 'Noise free',
    icon: NoiseFreeIcon,
    description:
      'One of the most important aspects of solar energy is that it does not generate any type of noise, unlike conventional electrical energy generators. If you do not want to put up with annoying sounds, then this is a possibility to gain in well-being.',
  },
  {
    title: 'Compatible with other types of energy',
    icon: CompatibleEnergyIcon,
    description:
      'Photovoltaic energy is compatible with other sources and, in fact, many homes have two installations for conventional energy to work when the other one does not. This is the way to make a gradual transition to solar energy and, above all, to avoid problems.',
  },
];
