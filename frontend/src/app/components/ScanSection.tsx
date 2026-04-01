import { Camera, Scan } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

interface ScanSectionProps {
  onScanIngredients: (file: File | Blob) => void;
  onScanBarcode: (barcode: string) => void;
}

export function ScanSection({ onScanIngredients, onScanBarcode }: ScanSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);
const streamRef = useRef<MediaStream | null>(null);
  const handleIngredientClick = () => {
  setShowOptions(true);
};
const handleCamera = async () => {
  setShowOptions(false);
  setShowCamera(true);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    streamRef.current = stream;

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  } catch (error) {
    alert("Camera access denied!");
  }
};

const handleCapture = () => {
  if (!videoRef.current) return;

  const canvas = document.createElement("canvas");
  canvas.width = videoRef.current.videoWidth;
  canvas.height = videoRef.current.videoHeight;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.drawImage(videoRef.current, 0, 0);
  }

  // stop camera
  streamRef.current?.getTracks().forEach(track => track.stop());

  setShowCamera(false);

  console.log("Image captured");

  // trigger existing flow
  canvas.toBlob((blob) => {
  if (blob) {
    onScanIngredients(blob);
  }
}, "image/jpeg");
};

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    console.log("Selected file:", file);
    onScanIngredients(file); // existing logic trigger
  }
};

const handleBarcodeScan = () => {
  setShowBarcodeScanner(true);

  setTimeout(() => {
    const scanner = new Html5Qrcode("barcode-reader");

    scanner.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: 250,
      },
      (decodedText) => {
        console.log("Barcode detected:", decodedText);

        scanner.stop();
        setShowBarcodeScanner(false);

        onScanBarcode(decodedText); // existing logic
      },
      (error) => {
        // ignore errors
      }
    );
  }, 300);
};

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mx-4 mb-4">
      <div className="space-y-3">
        <motion.button
          onClick={handleIngredientClick}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Camera className="w-6 h-6" />
          <span className="font-semibold">Scan ingredient list</span>
        </motion.button>

        <motion.button
          onClick={handleBarcodeScan}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Scan className="w-6 h-6" />
          <span className="font-semibold">Scan product barcode</span>
        </motion.button>
      </div>
      <input
  type="file"
  accept="image/*"
  ref={fileInputRef}
  onChange={handleFileChange}
  className="hidden"
/>
{showOptions && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-80 shadow-xl space-y-4">
      <h2 className="text-lg font-semibold text-center">Choose Option</h2>

      <button
        onClick={handleCamera}
        className="w-full bg-green-500 text-white py-3 rounded-xl"
      >
        📷 Use Camera
      </button>

      <button
        onClick={() => {
          setShowOptions(false);
          fileInputRef.current?.click();
        }}
        className="w-full bg-blue-500 text-white py-3 rounded-xl"
      >
        🖼️ Upload Image
      </button>

      <button
        onClick={() => setShowOptions(false)}
        className="w-full text-gray-500 text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
)}

{showCamera && (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
    
    <video
      ref={videoRef}
      autoPlay
      className="w-full max-w-md rounded-lg"
    />

    <button
      onClick={handleCapture}
      className="mt-4 bg-green-500 text-white px-6 py-3 rounded-xl"
    >
      📸 Capture
    </button>

    <button
      onClick={() => {
        streamRef.current?.getTracks().forEach(track => track.stop());
        setShowCamera(false);
      }}
      className="mt-2 text-white"
    >
      Cancel
    </button>

  </div>
)}
{showBarcodeScanner && (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
    
    <div id="barcode-reader" className="w-full max-w-md" />

    <button
      onClick={() => setShowBarcodeScanner(false)}
      className="mt-4 text-white"
    >
      Cancel
    </button>

  </div>
)}
    </div>
  );
}
