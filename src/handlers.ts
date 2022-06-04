export const handleError = (error: any) => {
    throw error.response.data;
}