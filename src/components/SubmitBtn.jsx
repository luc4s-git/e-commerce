export default function SubmitBtn({ text, type }) {
  return (
    <button type={type} className="btn btn-primary btn-block">
      {text}
    </button>
  );
}
