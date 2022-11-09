import { renderHook } from '@testing-library/react';
import useContains from '../index';

describe('useContains', () => {
  let button: HTMLElement;

  beforeEach(() => {
    button = document.createElement('button');
    document.body.appendChild(button);
  });

  afterEach(() => {
    document.body.removeChild(button);
  });

  it('test on click callback', async () => {
    let value: string = '';

    const callback = (isWithin: boolean) => {
      value = isWithin ? 'within' : 'without';
    };

    const { rerender, unmount } = renderHook(() => useContains(button, callback));

    expect(value).toEqual('default');
    rerender();
    button.click();
    expect(value).toEqual('within');
    unmount();
    document.body.click();
    expect(value).toEqual('without');
  });
});
