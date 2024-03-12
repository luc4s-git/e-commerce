import { useNavigation } from 'react-router-dom';

export default function SubmitBtn({ text, uppercase }) {
  const { state } = useNavigation();
  const isSubmitting = state === 'submitting';

  return (
    <button
      type="submit"
      className={`btn btn-primary btn-block ${uppercase && 'uppercase'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>SENDING...
        </>
      ) : (
        text
      )}
    </button>
  );
}
