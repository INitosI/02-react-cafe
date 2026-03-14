import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/Votes/Votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  // onVote – функція, яка викликається при кліку на одну з кнопок голосування;
  // onReset – функція, що викликається при кліку на кнопку Reset і відповідає за скидання голосів;
  // canReset – булеве значення, яке визначає, чи потрібно показувати кнопку Reset. (На цьому етапі можеш передавати просто зі значенням true.)

  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
