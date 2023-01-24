import { FC } from 'react';

interface LogoProps {
  className?: string;
  onClick?(): void;
}

export const Logo: FC<LogoProps> = ({ onClick, className }) => {
  return (
    <svg
      id="wizarding_world_logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 899.88 673.44"
      aria-labelledby="wizarding_world_logo_title_header"
      className={className}
      onClick={onClick}
    >
      <path
        fill="currentColor"
        d="M930.64,535.44h-33.8l6.61,7v95.91l-6.68,7.17h33.87L924,638.34V542.53ZM701.57,488.78v0A27.08,27.08,0,0,1,728.43,465h0A27.07,27.07,0,0,1,755.3,488.8v0a88.43,88.43,0,0,1,.63,9.68h318.57v-3.33L1061.63,486s-291,.05-293.77,0c-3.09-19-19.58-33.88-39.39-33.88h-.05c-19.81,0-36.3,14.92-39.38,33.88-2.79.05-293.77,0-293.77,0l-12.9,9.12v3.33H700.94A88.43,88.43,0,0,1,701.57,488.78Zm344.81,46.66h-26.6l6.66,7.08c0,5,0,74.07,0,74.07l-57.85-81.15H942.1l6.61,7.08s0,95.79,0,95.81l-6.64,7.19h26.32l-6.64-7.21V562l59.33,83.53h25.29l-6.67-7.17V542.53Zm-50-134.79-5.56,1.79c-6.45,2.09-13.12,4.24-19.72,6.15a22.25,22.25,0,0,1-6.78.44h-.61a5.39,5.39,0,0,1-1.91-.68c-.39-.19-.78-.38-1.17-.53l-1-.37-1.36,2.14.7.7.33.31a3.57,3.57,0,0,1,.43.44c.18.24.34.49.51.74a4.85,4.85,0,0,1-.83.36c-.7.22-1.41.41-2.12.59a29.7,29.7,0,0,0-3,.9c-1.89.7-3.75,1.45-5.62,2.21-1.71.69-3.43,1.38-5.15,2-1.92.73-4.06,1.43-6.54,2.15q-9.71,2.81-19.43,5.53c-.88.24-1.77.45-2.67.66l-1.81.43-2.75.72c-1.67.45-3.34.89-5,1.27a90.86,90.86,0,0,0-9.51,2.8c-1.85.63-3.76,1.27-5.81,1.87a113.22,113.22,0,0,0-12.25,4.65l-2.16.91c-3.71,1.56-7.44,3.22-11.05,4.81q-3.53,1.57-7.06,3.11a95.56,95.56,0,0,1-9.85,3.38c-2.65.8-5.38,1.63-7.86,2.57-4.91,1.87-10,3.42-15.16,5-2.72.82-5.3,2-8,2.75-1.88.5-3.73,1.15-5.6,1.68-3.56,1-7.28,2.12-10.44,3.09-1,.33-2.15.83-3.19,1.17-1.81.6-3.22,1-4.91,1.44s-3.48,1-5.38,1.46-1,.2-2.73.67-2.91.94-2.69,2.42c.16.67.77,1.29,2.9,1.29.06,0,3.85-.24,6.19-.67,5.65-1,10.87-2.49,16.89-3.76,2.48-.52,5.91-2.51,8.24-3s4.35-.89,6.8-1.44c1.94-.43,4.45-1.13,6.39-1.54,3.19-.68,5.74-2.28,8.55-3,4.39-1.12,8.77-1.48,12.38-3.65,3.44-2.07,7.13-2.31,11.08-3.66,1-.35,2-.76,3-1.17l1.4-.58c1.52-.61,3-1.29,4.5-2a50.54,50.54,0,0,1,9.53-3.59c1.54-.36,3-.84,4.51-1.31a30.25,30.25,0,0,1,7.61-1.75,19,19,0,0,0,2.68-.41l.47-.1a99.43,99.43,0,0,0,9.69-2.56c2.94-.89,6-1.81,9.28-2.48l3.91-.77c4-.8,8.19-1.62,12.27-2.57,2.31-.55,4.61-1.26,6.83-2,1.24-.38,2.47-.77,3.72-1.13.73-.21,1.47-.38,2.22-.56a31.4,31.4,0,0,0,3.67-1c4-1.47,7.86-3.08,11.46-4.6l.45-.18c1.29-.53,2.77-1.13,3.42-2.33.76-1.38,1.78-1.53,3.65-1.69s3.72-.32,5.59-.47c5.21-.43,10.61-.87,15.9-1.52A76.74,76.74,0,0,0,999,415.62c3.09-.9,6.18-1.94,9.18-2.95,3.72-1.25,7.57-2.54,11.41-3.57,5-1.35,15.81-3.74,20.79-4.85,3-.67,6-1.34,9-2.06,1.86-.45,4.4-1.86,4.22-3.59a4,4,0,0,0-1.45-2.78c-1.36-1-2-2.35-1.94-4.49a3.43,3.43,0,0,0-2.54-3l-.67-.08a16.39,16.39,0,0,0-6.2.08c-2.46.68-10.7,2.42-13.19,2.89a65.84,65.84,0,0,0-11.46,2.93c-4.69,1.82-9.6,3.34-14.35,4.81C1000,399.51,998.18,400.07,996.37,400.65Zm-129-111a3.45,3.45,0,0,0,.52.73c-32.55,44.52-107.29,148.89-108.51,150.46s-2.95,4.44-.83,5.72,4.76-2.38,4.76-2.38c26.58-33.61,95.93-127,111.91-148.54a3.53,3.53,0,0,0,.84.25h0a3.61,3.61,0,0,0,1.9-.18,3.43,3.43,0,0,0,2.11-2.81l.45-4.27a1.35,1.35,0,0,1,.56-.95l2.78-1.92a1.07,1.07,0,0,0,.3-.3l39.83-53.15a6.52,6.52,0,0,1,4.19-2.54l2.06-.33a3.56,3.56,0,0,0,2.69-2.1h0a2.34,2.34,0,0,0-.79-2.84l-15.67-11.25a2.35,2.35,0,0,0-2.94.16,3.55,3.55,0,0,0-1.13,3.22l.35,2.06a6.52,6.52,0,0,1-1.07,4.79l-37,55.15a1.46,1.46,0,0,0-.18.38l-.94,3.25a1.29,1.29,0,0,1-.72.83l-3.9,1.8a3.4,3.4,0,0,0-2,2.89,3.53,3.53,0,0,0,.43,1.85Zm-130,308s7.13,27.35,25.28,49.14c12.63,15.16,31.81,26,57.74,26,39,0,43.13-31.52,43.13-31.52H840.46l-6.2,12.1,13.17-7.54,4.54,4.64c-1.81,4.08-10.09,11.77-26.57,11.77-22.48,0-35.24-11.68-43.32-23.55-12.64-18.56-19-40.83-19-40.83l-8.13-2.83h0s22-8.22,22-30.54c0-10.91-6.74-20.83-17.59-25.89a32.86,32.86,0,0,0-14.1-3.24H695.88l6.61,7.07v95.8l-6.7,7.21h33.87L723,638.35s0-40.64,0-40.64ZM723,546.51h15.29c14.24,0,18.05,12.4,18.05,18.79,0,10.37-8.11,21.4-18.2,21.4H723ZM745.68,439a4.18,4.18,0,0,0,.59.35,2.46,2.46,0,0,0,2.09,0c1.18-.51,2.12-1.85,2.77-4,.93-3,2.2-7.37,3.55-12,1.08-3.69,2.22-7.58,3.29-11.18,2.94-9.83,11.62-33.26,16.28-45.85,1.7-4.57,2.82-7.58,3-8.14s.33-1.21.47-1.78a51.64,51.64,0,0,1,1.83-6.13c.29-.83.7-2,1.21-3.45,2.84-8.12,8.77-25,11.62-35.58a23.06,23.06,0,0,1,1.1-3.12,22.51,22.51,0,0,0,1.18-3.46,23.09,23.09,0,0,1,.84-2.87,31,31,0,0,0,1.22-4.41,10.4,10.4,0,0,1,.73-2c.56-1.33,1.42-3.35,2.65-6.88,1.43-4.09,5-14.74,7.36-21.78,1.25-3.73,2.18-6.5,2.3-6.83s.54-1.3,1.16-2.71c1-2.21,2.44-5.53,4.3-10,3.21-7.73,9.23-23.14,13.51-34.37,1.51-4,3-7.62,4.33-11,2.63-6.55,4.91-12.21,6.1-16.81,1.87-7.2-4-12.91-6.84-13.66s-3.41.72-3.94,1.9l-.12.26c-2.24,4.84-4.2,13.17-5.78,19.86-1,4.22-1.86,7.86-2.58,9.88-5.91,16.46-8.23,23.91-10.93,32.54-1,3.3-2.1,6.74-3.45,10.9-2.1,6.52-6.23,18.83-10.59,31.87-5.6,16.72-11.39,34-13.44,40.62-2.26,7.31-12.29,37.74-19.62,60-4.5,13.66-8.06,24.46-8.55,26.06-1.32,4.24-6.8,22.64-8,27.23C744.43,435.71,744,437.8,745.68,439Zm27.39,18.55h0a2.52,2.52,0,0,0,3.63.74c20.1-14.45,170.22-121.09,179.12-127.48a3.51,3.51,0,0,0,2.89-.57,3.82,3.82,0,0,0,1.4-1.74c1.27-.68,4.72-2.53,7.09-3.77S987,312.66,990.41,311c8.31-2.85,16.14-8.34,11.45-17.86-2.21-4.5-7.75-6.39-12.33-5-7.16,2.17-6.72,9.7-6.71,10.57-1.77.76-3.72.26-4.83.29a.71.71,0,0,0-.63.44,5.4,5.4,0,0,0-.23.86,3.78,3.78,0,0,1-1.3,2.14L954,320.46a4.34,4.34,0,0,0-2.45.9,5.12,5.12,0,0,0-1.32,2.17c-6.9,5-158,116.8-176.55,130.71A2.53,2.53,0,0,0,773.07,457.58ZM620.45,184.7c.81.29,2.57,1.18,3.18,1.49l2.08,1.09.2.65a11.25,11.25,0,0,0,1.07,3.26,41.31,41.31,0,0,1,1.42,4.69,2.67,2.67,0,0,0,.25.58l3,5.17.59,1.86.41.25a3.29,3.29,0,0,1,.31.27,2,2,0,0,0-.49,1.35c0,1.41,1.25,3,2.28,4.06a62,62,0,0,1,2.83,8.54c-.15.51-.27,1.73.54,5.07a33.79,33.79,0,0,1,1,3.95,48,48,0,0,0,1.59,5.9l1.15,3.68a24.16,24.16,0,0,1,.82,3.28c.05.45.2,2.21.64,8.09a2.43,2.43,0,0,0,.78,1.62l2.11,1.95a18.12,18.12,0,0,1,1.36,1.54,6.73,6.73,0,0,0,1.53,1.4l5.7,17.05c3.45,11.25,7.48,24.31,11.63,37,1.27,3.87,2.52,7.78,3.77,11.7,4.23,13.28,8.6,27,14.13,39.72l25.52,76.37a3.06,3.06,0,0,0,3.79,1.94,1.66,1.66,0,0,0,.62-.32,3.07,3.07,0,0,0,1.13-3.35l-21.54-72a58.16,58.16,0,0,0-2.84-9.8l-.46-1.1-.41-1.33a30.25,30.25,0,0,0-1.6-9.58c-1.48-3.92-3.17-7.75-4.64-11l-1.64-5.41c-2.22-9.19-5-18.85-8.53-29.51-1-3.05-1.83-5.35-2.64-7.36l-11.6-38.26a2.47,2.47,0,0,0,1.65-3.1l-3-9.76a2.51,2.51,0,0,0-.69-1.08l-1.83-1.63-.32-1,0-1.28a2.38,2.38,0,0,0-.18-.88l-4.52-10.89.65-2a2.46,2.46,0,0,0,.07-1.67l-.56-1.77a2.37,2.37,0,0,0-1-1.3l-1.76-1.61-.15-.09-1.27-3.37-1.91-7.59L639.77,187c1.35-4.81,1.11-5.59,1-6a9.89,9.89,0,0,1,.06-1.82,12.47,12.47,0,0,0,.07-2.24c-.06-.54-.1-2-.11-4a2.45,2.45,0,0,0-1.77-2.34l-2.27-.66-2.34-.88-1.92-.51a2.51,2.51,0,0,0-1.36,0l-2.3.73c-2.24.08-3.41.74-3.45,1.84a9,9,0,0,1-1.21,1.76l-2.5.78-.27.11c-.55.32-2.37,1.48-2.61,3a25.09,25.09,0,0,0,.11,4.37C618.65,182.64,619,184.2,620.45,184.7ZM464.41,310a15.29,15.29,0,0,1,7.32,3.41c2.06,1.85,7,3.65,9,5.2s6.21,4.27,8.15,4.81a9.76,9.76,0,0,1,5.05,3.26c1,1.42,4.24,1.7,4.24,1.7a26.27,26.27,0,0,0,2.83,2.54c1.06.71,7.41,3.85,9.58,6s9,5.45,13.87,9.45a64.49,64.49,0,0,0,10.42,7.27c2.56,1.34,6.86,4.79,9.32,6.84s6.35,4.28,8.8,6.48,7.67,5.18,11.65,7.71,9,6.8,12.24,8.81,10.24,6.38,12.85,8.45,11.4,8.55,15.8,11.28a124.22,124.22,0,0,1,13.14,9.5c3.9,3.24,15.59,10.68,26,17.66s33.13,22.92,36.18,24.9,4.67.61,4.91-.07.66-1.79-1.64-4-14.3-10.66-19.43-14.35-19.63-15-23.43-17.76-29.19-21.1-35-25.31-13.7-9.72-17.91-12.72-9.89-6.91-14.81-10-8-6.81-14.93-11.32-9.74-8-15.78-11.42-8.42-6-11.52-8.71-8.25-4.46-10.88-7.53-7.79-4.85-7.79-4.85c-.52-1.51-5.62-4.34-6.95-5.23s-12.12-12-16.92-15.76S480,301,478.13,299.7s-3-4-8.07-9.15c-4.45-4.55-11.61-1.76-14.42,1.74s-2.74,6.69-1.18,11.21S461.47,309.32,464.41,310Zm69.75-81.81.59,2.92a2.92,2.92,0,0,0,1.69,2.09l2.81,1.21,12,16.37,0,1.46c0,.1,0,.21,0,.32a2.73,2.73,0,0,0,.1,1.31,14.68,14.68,0,0,0,1.88,3,3,3,0,0,0,.7.58l3,1.54,5.75,7.74,1.34,2.37.26.36,2,2.16,3.85,5.19-.07,1.36a3.27,3.27,0,0,0,.59,2.08c.54.77,1.37,1.81,2,2.53a3.25,3.25,0,0,0,1.82,1l1,.2L578,287.3l-.37,1.32,0,.09a11.25,11.25,0,0,0,2.06,3.07l.09.06h1.45l3.85,5.21-.27,2.67,0,.07a10.33,10.33,0,0,0,3.12,3.63l2,.21,3.8,5.12a4.8,4.8,0,0,0,.15,1,7.47,7.47,0,0,0,1.5,2.8,11.54,11.54,0,0,0,3.12,2.65l3.16,4.21a5.85,5.85,0,0,0,2.34,3.69,1.32,1.32,0,0,0,.58.21l14,18.71,11,14.57a19.5,19.5,0,0,0,5.82,7.73c9.72,12.92,57.89,76.73,59.38,78.57a4,4,0,0,0,3,1.77,2.62,2.62,0,0,0,1.85-.78,3.78,3.78,0,0,0,0-5.1c-.59-.77-43.86-61-71.4-99.74a21.76,21.76,0,0,0-2-3.67,62.37,62.37,0,0,0-7.93-10L613,318a1,1,0,0,0-.08-.37A20.82,20.82,0,0,0,610,313.4l-.37-.45a13.7,13.7,0,0,0-2.53-4.81,26,26,0,0,0-2.36-3.55h0L596.4,293l.46-1.94V291c-.09-1.09-2.29-4.42-3.38-4.83l-.08,0-1.76.2-2.18-2.92.43-1.54v-.07a2.88,2.88,0,0,0-.38-1.18,24.34,24.34,0,0,0-1.41-2.12,2.77,2.77,0,0,0-1.69-1.06l-1.3-.12-4.44-6.34.09-2.46,0-.06a28,28,0,0,0-2.68-4l-2.67-.89-3.44-4.82v0c.38-.84,1-2.12.52-2.9-.68-1.2-1.69-2.95-2.49-4.31-.65-1.11-1.85-1.69-3.65-1.77l-.85,0-13.54-18.94-.45-1.79A3.54,3.54,0,0,0,550.2,227l-2.88-2.16-6.76-10.06a2.56,2.56,0,0,0-3.59-.58l-6.32,4.66a2.56,2.56,0,0,0-.53,3.55ZM408.35,409.61a10.28,10.28,0,0,0,1.35,1.65c1,1.13,4.81,3.38,6.07,4a11.75,11.75,0,0,0,4.34,1.79,23.49,23.49,0,0,1,2.79,1,20.34,20.34,0,0,0,4.52,1.41c.24,0,.5.06.78.1,1.42.21,3.38.5,4.76-.61.54-.43,1.76-2.12,1.72-2.78s-2.54.54-5.21-2.11c-.55-.54-3.41-3-3.48-3.62s1.81-4.3,2.38-4.35a13.8,13.8,0,0,1,2.75.8,19.36,19.36,0,0,1,7.33,4.26,18.52,18.52,0,0,0,11.83,4.76c19.29-1.53,39,9.12,40.81,10.91,2.8,2.78,5.11,2.08,5.37,2l.26-.09.2-.2c3.95-3.81,10.81-2.54,10.84-2.54l46.75,13.45a82.68,82.68,0,0,0,11.92,3.43l105.09,30.72a2.76,2.76,0,0,0,.85.11,2.88,2.88,0,0,0,2.58-4,2.9,2.9,0,0,0-1.76-1.6c-6.59-2.11-29.48-10-58-19.18a81.18,81.18,0,0,0-10.9-4.36,77.24,77.24,0,0,0-9.86-2.33c-55.34-17.86-86.38-28.05-89.79-29.45-2.78-1.15-3-2-3-2.08-.07-.57,1.2-1.51,1.75-1.91s1.29-1,1.23-1.79l-.1-.77-.63-.33c-1.36-.72-7-1-14.79-.82-10.29.3-45.47-4.42-52-13.47a31.52,31.52,0,0,0-4.76-5.27,27.24,27.24,0,0,1-3.66-3.78c-4-5.16-11.7-7-14,1-1.77,6.13-9.5,6.27-11.06,12.55-.69,2.76,1.91,4.41,3.12,6.76C407.32,405.05,406.73,407.66,408.35,409.61ZM720,207.3c.16,2,2.12,3.21,3.33,3.8l.58,23.89-2.56,2.43a3.89,3.89,0,0,0-1.29,2.79c0,.68,0,1.43.05,2.2a17.54,17.54,0,0,0,4.28,10.36c.12.14.23.27.31.38l.19,4.16a111.42,111.42,0,0,0,.77,17.9l.48,11c-2.83,4.07-3.83,7.64-3,10.61a7.26,7.26,0,0,0,3.13,4.12v.69a72.88,72.88,0,0,0,0,18.19l0,16.16a12.16,12.16,0,0,0-2.82,9.24c.17,3,.9,5.17,2.15,6.31.24,2.3.61,4.57,1,6.76l.23,1.38-.53,31.19c-3.37,8.51-.7,13.69.66,15.58.27,5.82.76,27.28.77,27.49,0,.6.43,2.64,2.27,2.64a2.84,2.84,0,0,0,2.91-3c.42-7.64,1.28-22.64,1.09-27.11,1.37-1.88,4.07-7.06.69-15.62l-.07-4.27a50.53,50.53,0,0,0-.11-7.09l-.13-8.43a57.75,57.75,0,0,0-.1-6.32L734,358c.21-1.92.36-3.87.45-5.81,1.25-.94,2.13-2.91,2.62-5.92a12.31,12.31,0,0,0-2.5-10.3l0-2.08a23.2,23.2,0,0,0,0-4.87l-.5-28.18a8.15,8.15,0,0,0,2.93-4.71c.63-3.05-.44-6.5-3.18-10.27l.16-32.73a20.55,20.55,0,0,0,4.63-12.92,4,4,0,0,0-1.29-2.78L734.72,235v-.23c.26-3.66.35-7.39.28-11.36l.3-12.3c1.24-.58,3.25-1.83,3.41-3.8.08-.88.45-3.64,1-7.56a6.15,6.15,0,0,0-4.14-6.8l-.84-15.21a9.11,9.11,0,0,0,3.47-8.14,8.12,8.12,0,0,0-4.71-6.31l4.1-6.81v-.33c0-.49.12-4.78-2.68-5.49a23.9,23.9,0,0,0-5.93-.77h-.76a13.34,13.34,0,0,0-3.45.46l-.17,0-1,.26c-2.77.71-2.67,5-2.65,5.49v.33l4.1,6.81a8.14,8.14,0,0,0-4.71,6.31,9.13,9.13,0,0,0,3.46,8.14l-.83,15.2a6.09,6.09,0,0,0-4.07,6.81C719.53,203.72,719.89,206.41,720,207.3ZM704.2,729.1,674.12,701l-37.72-.5s-12,16.34-14,26.44c-2.06,10.5,5.24,23.92,22.55,20.46,0,0-9.91.23-13.88-8.09-2.23-5.41-2.9-12.94,5.21-19.67,13.62-11.31,29.28-3.45,36,4.65,6.5,7.85,14.4,24.84,10.76,43.65-5.31,27.42-23.48,41.81-43.31,41.81-23.46,0-46.53-23.57-46.53-59.06,0-12.62,3.45-28,12.43-39.94,22.62-30.14,68.42-21.26,81.76-16.31a88.49,88.49,0,0,0-47.66-13.84c-44.53-.25-73.78,31.63-73.78,70.09,0,44,34,70.8,73.78,70.8,26.49,0,48.71-12.3,60.21-30.31,7.7-12.08,12.72-31.25,8.59-48.32A118.32,118.32,0,0,0,704.2,729.1Zm88.94,27.16-8.21-2.89L811,741.59h0l-4.56-3.42c.31-.47,12.28-14,12.28-14l-6.91.25c4.6-25.39-16.81-42-37.48-42h-57l6.77,7.32v120.5l-6.84,7.32h39.29l-6.77-7.32V755.46h14.35l38.17,54.73-6.79,7.32H837.7l-6.76-7.32Zm-28.7-12.06H749.86V693.87h14.42c14.32,0,22.1,13.32,22.1,23.65C786.38,730.49,778.89,744.2,764.44,744.2Zm106.83,62.09,5.3-5.63v-111l6.93-7.3H843.89l6.74,7.3V810.23l-6.8,7.28H930l2.91-26.93-12.77,15.71Zm298.61-223.9h-38.75c-10.55,0-21.2.73-25.05,9.65-.38.88-1,3.11-1,3.11L1116.44,606l5.13-12.42h22.17l-5.37,5.72v34c-5,2.09-13.4,3.57-20.38,3.57-20.37,0-42.36-17.63-42.36-46.12,0-22.74,14.85-46.91,42.36-46.91,13,0,24,5.36,28.79,9.75a73.49,73.49,0,0,1,9.91,12.16l8.78-29-12.69,4.64s-17.58-8.69-34.5-8.69c-38,0-64.5,23.87-64.5,58a59.81,59.81,0,0,0,16.14,41.55c12.9,13.83,31.39,15.7,47.78,15.7a98.91,98.91,0,0,0,41.45-9.69V605.87l9.79-11.44-8.94-1.51Zm-156.31,100H936.08l11.15,12.84-13.5-1.08,12.76,24.7-8.63-3.61,8.2,17.14v77.83l-6.85,7.32h69.15c22.6,0,63.78-19.22,63.78-68.87C1072.14,709.12,1048.06,682.37,1013.57,682.37ZM995.84,806.29H966.59l5.26-5.6V693.59h34.29c25.92,0,39,27.84,39,55.66C1045.1,782.71,1022.05,806.29,995.84,806.29ZM394.57,644.94l34.08-102.38,6.77-7.12H407.73l6.66,7.12-21.34,63.21-24.47-63.25,6.78-7.1-36.33,0,6.69,7.08-20.3,68.14-11.87-27.6,8.76,3.62-16.18-30.84,10,4.21-11.57-24.61H270l20.3,35.1-11-4.65,25.51,39.47-10.68-4.44,28.52,53.33,5.47-7.67,26.25-84.91,34.71,90.94Zm174.28-94.79V535.44H492.26l-3.84,26.17,14.45-15.18h44.66l-58.39,83.8v15.29h79.71l2.77-24.19s-12.47,13.2-12.57,13.21H511.31l36.09-52.67,15.52-10.33-5.59-3.19,20.21-12.94Zm121,95.37-6.65-7.17-34.88-95.81,6.58-7.1H618l6.49,7.07-27.48,62H584.44l8.84,8.44L582,638.35l-6.67,7.17h28.07l-6.67-7.17,10.05-22.85h53l-4.93,4.75,6.57,18.1-6.68,7.17Zm-78.09-41,20.41-46.35,16.94,46.35ZM885.85,581.9c0-22.45-10-46.46-43.35-46.46l-49.58,0,6.68,7v81.46L793.82,631h50.94C869.66,631,885.85,608.37,885.85,581.9ZM835.18,620H814.84l5.16-5.5v-68h16.79c22.53,0,26.85,22.32,26.85,35.28C863.64,599.22,855.92,620,835.18,620Zm-259.71,62.4H546.53l6.41,7.31L525.25,770.1l-27.46-80.59,7.4-7.14H464.46l6.56,7.31-22,77.83-29.3-77.83,6-7.31H385.55l7.18,7.31,50.52,133.56,7.23-7.73L479,711.81l38.09,111.51,6.8-7.32c9.35-27,43.39-126.28,43.41-126.32ZM475.66,535.44h-33.8l6.61,7v95.9l-6.68,7.17h33.87L469,638.34v-95.8Zm582,272.4h3.47v9.6h1.74v-9.6h3.47v-1.56h-8.68Zm16.42,7.9-3.81-9.46h-1.85v11.16h1.67v-7.73l.58,1.58,2.57,6.15h1.68l2.57-6.15.58-1.58v7.73h1.67V806.28h-1.85Z"
        transform="translate(-270 -149.88)"
      ></path>
    </svg>
  );
};
