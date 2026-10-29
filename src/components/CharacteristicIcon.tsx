/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Sprout,
  Landmark,
  Hammer,
  Crown,
  Layers,
  Scroll,
  Columns3,
  Cpu,
  Globe,
  Sparkles,
  Scale,
  Flame,
  LucideProps
} from 'lucide-react';
import { CharacteristicKey } from '../types/civilization';

interface CharacteristicIconProps extends LucideProps {
  characteristicKey: CharacteristicKey;
}

export const CharacteristicIcon: React.FC<CharacteristicIconProps> = ({ characteristicKey, ...props }) => {
  switch (characteristicKey) {
    case 'stable_food_supply':
      return <Sprout {...props} />;
    case 'advanced_cities':
      return <Landmark {...props} />;
    case 'specialized_workers':
      return <Hammer {...props} />;
    case 'complex_institutions':
      return <Crown {...props} />;
    case 'social_classes':
      return <Layers {...props} />;
    case 'record_keeping_writing':
      return <Scroll {...props} />;
    case 'art_architecture':
      return <Columns3 {...props} />;
    case 'advanced_technology':
      return <Cpu {...props} />;
    case 'long_distance_trade':
      return <Globe {...props} />;
    case 'artistic_material_culture':
      return <Sparkles {...props} />;
    case 'socio_political_statecraft':
      return <Scale {...props} />;
    case 'resource_extraction_limits':
      return <Flame {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
