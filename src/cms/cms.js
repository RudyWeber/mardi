import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import slideshowWidget from "./customWidgets/slideshow";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import WhatWeDoPagePreview from "./preview-templates/WhatWeDoPagePreview";
import GetInvolvedPagePreview from "./preview-templates/GetInvolvedPagePreview";
import RefugeeCrisisPagePreview from "./preview-templates/RefugeeCrisisPagePreview";
import FaqPagePreview from "./preview-templates/FaqPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactUsPagePreview from "./preview-templates/ContactUsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent(slideshowWidget);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("contact-us", ContactUsPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("what-we-do", WhatWeDoPagePreview);
CMS.registerPreviewTemplate("refugee-crisis", RefugeeCrisisPagePreview);
CMS.registerPreviewTemplate("get-involved", GetInvolvedPagePreview);
CMS.registerPreviewTemplate("faq", FaqPagePreview);
CMS.registerPreviewTemplate("news", BlogPostPreview);
