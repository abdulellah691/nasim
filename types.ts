
import * as React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface BookingData {
  name: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  notes: string;
}
