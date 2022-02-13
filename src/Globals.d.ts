declare module "*.module.css";
declare module "*.module.scss";
// https://stackoverflow.com/a/66356082
declare module "*.mp4" {
  const src: string;
  export default src;
}
