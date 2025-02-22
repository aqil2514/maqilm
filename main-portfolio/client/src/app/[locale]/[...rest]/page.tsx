import { Metadata } from 'next';
import {notFound} from 'next/navigation';

export const metadata:Metadata = {
  title:"Not Found | Muhamad Aqil Maulana"
}
 
export default function CatchAllPage() {
  return notFound();
}