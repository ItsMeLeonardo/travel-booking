import Button from 'components/Button'
type Props = {
  filter: string
}

export default function WithoutResultsError({ filter }: Props) {
  return (
    <>
      <div className="error">
        <p className="message">Sorry we don&lsquo;t have results for &lsquo;{filter}&lsquo; </p>
        <footer>
          <Button variant="danger" href="/home/feed/all">
            Go to All
          </Button>
        </footer>
      </div>

      <style jsx>{`
        .error {
          width: 100%;
          border-radius: 0.5rem;
          background: var(--danger-25);
          padding: 1rem;
          color: var(--white);
          min-height: 10rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: solid 2px var(--danger);
        }
        .message {
          margin: 0.25rem;
          font-size: 2rem;
          font-weight: 600;
        }
        footer {
          align-self: flex-end;
        }
      `}</style>
    </>
  )
}
