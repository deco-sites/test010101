export type Props = {
  text: string;
};

export default function Test(props: Props) {
  return (
    <div class="bg-white relative overflow-hidden -mt-4">
      <section class="container mx-auto px-4 pt-16 pb-40 lg:pb-40 text-primary-dark">
        teste... <span>{props.text}</span>
      </section>
    </div>
  );
}
