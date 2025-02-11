import { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider';

declare global {
  interface Window {
    $message: MessageApiInjection;
  }

  interface OBJ extends Object {
    [k: string]: any;
  }
}
