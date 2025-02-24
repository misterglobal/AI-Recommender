export interface FormData {
  businessType: string;
  size: number;
  revenue: number;
  demographics: string[];
}

export interface ApiResponse {
  success: boolean;
  recommendations: string[];
  error?: string;
}