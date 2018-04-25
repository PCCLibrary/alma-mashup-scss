# alma-mashup-scss
Workflow to generate alma mashup css using Gulp/SCSS

## Instructions
- Copy selector from /src/css stylesheet. 
- Convert to SCSS
- Either add to `_customizations.scss` or create a new scss file, and import it into `mashup_new.scss`

## Tasks
- `gulp` - default task will process scss files into css and then create `skin.zip` archive under `dist`. This is ready to upload to Alma back office. 

## Notes
This project was done for the PCC Primo New UI launch. It may or may not work in other cases. 