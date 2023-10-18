
export default function() {
  this.nuxt.hook('generate:routeFailed', ({ route, errors }) => {
    const error = errors[0].error;
    throw new Error(`Error generating ${route}:\n${error}`);
  });
}