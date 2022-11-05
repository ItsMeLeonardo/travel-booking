'use client'

export default function CardSavedError({ error }: { error: Error }) {
  return (
    <>
      <div className="errorContainer error">
        <h3 className="headLine">!!!Ups 😥</h3>
        <p className="message">{error.message}</p>
      </div>
      <style jsx>{`
        .headLine {
          margin: 0.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--white);
        }
        .message {
          margin: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
        }
      `}</style>
    </>
  )
}
