import React from 'react';
import type { Service } from './types.ts';
import { AirConditionerIcon, CleanIcon, WrenchIcon, GasCylinderIcon } from './components/icons/ServiceIcons.tsx';

export const WHATSAPP_NUMBER = "+966501234567";
export const PHONE_NUMBER = "+966501234567";
export const LANDLINE_NUMBER = "0112345678";

export const SERVICES: Service[] = [
  {
    icon: React.createElement(AirConditionerIcon),
    title: 'صيانة دورية وشاملة',
    description: 'فحص كامل لجميع أجزاء المكيف لضمان أفضل أداء وتجنب الأعطال المفاجئة.'
  },
  {
    icon: React.createElement(CleanIcon),
    title: 'تنظيف عميق للوحدات',
    description: 'تنظيف الفلاتر والمكونات الداخلية والخارجية لتحسين جودة الهواء وكفاءة التبريد.'
  },
  {
    icon: React.createElement(GasCylinderIcon),
    title: 'تعبئة غاز الفريون',
    description: 'قياس وإعادة تعبئة غاز الفريون للوصول إلى مستوى التبريد المثالي.'
  },
  {
    icon: React.createElement(WrenchIcon),
    title: 'إصلاح جميع الأعطال',
    description: 'تشخيص دقيق وإصلاح احترافي لجميع المشاكل والأعطال في نظام التكييف.'
  }
];