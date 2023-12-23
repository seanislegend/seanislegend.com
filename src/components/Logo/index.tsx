interface Props {
    className: string;
    hasStrapline?: boolean;
}

const Logo: React.FC<Props> = ({className, hasStrapline = true}: Props) => (
    <svg
        width="1046"
        height="211"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 1046 211"
    >
        <g fillRule="nonzero" fill="none">
            <path
                d="M8.06 198.924c4.706 0 6.708-2.522 6.708-5.226 0-4.238-2.73-4.94-6.916-5.98-2.73-.676-4.732-1.014-4.732-3.484 0-1.534 1.404-2.548 4.03-2.548 2.938 0 4.342 1.3 4.68 3.796h2.34c-.312-3.848-3.068-5.876-7.02-5.876-4.108 0-6.37 1.95-6.37 4.888 0 3.614 3.328 4.576 6.11 5.226 4.16.962 5.538 1.43 5.538 3.978 0 1.664-1.144 3.146-4.368 3.146-3.9 0-5.46-1.976-5.72-4.524H0c.26 4.264 3.666 6.604 8.06 6.604Zm16.934-.364v-16.51h6.188v-2.08H16.466v2.08h6.188v16.51h2.34Zm11.942 0v-7.514h5.33c4.706 0 2.938 6.734 3.744 7.514h2.522v-.156c-.962-.312.546-7.618-3.588-8.424v-.052c2.054-.52 3.328-2.002 3.328-4.68 0-3.302-2.47-5.278-6.136-5.278h-7.54v18.59h2.34Zm4.8-9.594h-4.8v-6.916h4.654c1.924 0 4.342.234 4.342 3.458 0 3.143-2.299 3.444-4.197 3.458Zm23.86 9.594v-2.08H54.494v-6.5h9.542v-2.08h-9.542v-5.85h10.79v-2.08h-13.13v18.59h13.442Zm17.272 0v-2.08H71.766v-6.5h9.542v-2.08h-9.542v-5.85h10.79v-2.08h-13.13v18.59h13.442Zm11.188 0v-16.51h6.188v-2.08H85.528v2.08h6.188v16.51h2.34Zm6.924 3.302c2.028-.364 2.6-2.574 2.6-3.952 0-1.222-.494-2.028-1.456-2.028-.78 0-1.404.52-1.404 1.508 0 1.144.754 1.586 1.56 1.326 0 .962-.494 1.664-1.3 1.846v1.3Zm20.244-3.302v-16.51h6.188v-2.08h-14.716v2.08h6.188v16.51h2.34Zm11.942 0v-7.514h5.33c4.706 0 2.938 6.734 3.744 7.514h2.522v-.156c-.962-.312.546-7.618-3.588-8.424v-.052c2.054-.52 3.328-2.002 3.328-4.68 0-3.302-2.47-5.278-6.136-5.278h-7.54v18.59h2.34Zm4.8-9.594h-4.8v-6.916h4.654c1.924 0 4.342.234 4.342 3.458 0 3.143-2.299 3.444-4.197 3.458Zm11.354 9.594 1.638-4.654h8.19l1.638 4.654h2.418l-6.838-18.59h-2.6l-6.864 18.59h2.418Zm9.074-6.734h-6.656l3.302-9.698h.052l3.302 9.698Zm13.684 6.734 6.5-18.59h-2.47l-5.304 16.25h-.026l-5.304-16.25h-2.47l6.5 18.59h2.574Zm23.044 0v-2.08H184.02v-6.5h9.542v-2.08h-9.542v-5.85h10.79v-2.08h-13.13v18.59h13.442Zm15.92 0v-2.08h-9.75v-16.51h-2.34v18.59h12.09Zm3.596 3.302c2.028-.364 2.6-2.574 2.6-3.952 0-1.222-.494-2.028-1.456-2.028-.78 0-1.404.52-1.404 1.508 0 1.144.754 1.586 1.56 1.326 0 .962-.494 1.664-1.3 1.846v1.3Zm20.894-3.302c3.848 0 6.292-1.976 6.292-5.408 0-2.782-1.664-4.264-3.614-4.602v-.052c1.534-.52 2.886-1.56 2.886-3.848 0-2.886-2.288-4.68-6.084-4.68h-7.488v18.59h8.008Zm-.156-10.816h-5.512v-5.694h5.772c2.132 0 3.12 1.17 3.12 2.86s-.728 2.834-3.38 2.834Zm.39 8.736h-5.902v-6.656h6.422c1.95 0 3.198 1.326 3.198 3.328 0 1.742-.728 3.328-3.718 3.328Zm23.044 2.08v-2.08h-11.102v-6.5h9.542v-2.08h-9.542v-5.85h10.79v-2.08h-13.13v18.59h13.442Zm17.272 0v-2.08H264.98v-6.5h9.542v-2.08h-9.542v-5.85h10.79v-2.08h-13.13v18.59h13.442Zm6.17 0v-7.514h5.33c4.706 0 2.938 6.734 3.744 7.514h2.522v-.156c-.962-.312.546-7.618-3.588-8.424v-.052c2.054-.52 3.328-2.002 3.328-4.68 0-3.302-2.47-5.278-6.136-5.278h-7.54v18.59h2.34Zm4.8-9.594h-4.8v-6.916h4.654c1.924 0 4.342.234 4.342 3.458 0 3.143-2.299 3.444-4.197 3.458Zm19.058 9.594v-7.774h5.044c3.406 0 6.032-1.508 6.032-5.408 0-3.9-2.626-5.408-6.032-5.408h-7.384v18.59h2.34Zm5.304-9.854h-5.304v-6.656h5.304c2.314 0 3.432 1.066 3.432 3.328 0 2.262-1.118 3.328-3.432 3.328Zm11.474 9.854v-8.606h9.932v8.606h2.34v-18.59h-2.34v7.904h-9.932v-7.904h-2.34v18.59h2.34Zm25.384.364c5.46 0 9.1-4.082 9.1-9.672 0-5.59-3.64-9.646-9.1-9.646-5.46 0-9.1 4.056-9.1 9.646 0 5.59 3.64 9.672 9.1 9.672Zm0-2.08c-4.68 0-6.76-3.588-6.76-7.592s2.08-7.566 6.76-7.566 6.76 3.562 6.76 7.566-2.08 7.592-6.76 7.592Zm19.17 1.716v-16.51h6.188v-2.08h-14.716v2.08h6.188v16.51h2.34Zm16.83.364c5.46 0 9.1-4.082 9.1-9.672 0-5.59-3.64-9.646-9.1-9.646-5.46 0-9.1 4.056-9.1 9.646 0 5.59 3.64 9.672 9.1 9.672Zm0-2.08c-4.68 0-6.76-3.588-6.76-7.592s2.08-7.566 6.76-7.566 6.76 3.562 6.76 7.566-2.08 7.592-6.76 7.592Zm20.652 2.08c2.86 0 4.602-1.04 6.006-2.99h.052l.78 2.626h1.56v-9.672h-8.398v2.08h6.058c0 3.484-2.73 5.876-6.058 5.876-4.68 0-6.032-4.082-6.032-7.592 0-3.484 1.872-7.566 6.292-7.566 2.808 0 4.94 1.248 5.486 3.9h2.34c-.65-3.536-3.12-5.98-7.826-5.98-5.148 0-8.632 4.056-8.632 9.646 0 5.616 2.964 9.672 8.372 9.672Zm15.062-.364v-7.514h5.33c4.706 0 2.938 6.734 3.744 7.514h2.522v-.156c-.962-.312.546-7.618-3.588-8.424v-.052c2.054-.52 3.328-2.002 3.328-4.68 0-3.302-2.47-5.278-6.136-5.278h-7.54v18.59h2.34Zm4.8-9.594h-4.8v-6.916h4.654c1.924 0 4.342.234 4.342 3.458 0 3.143-2.299 3.444-4.197 3.458Zm11.354 9.594 1.638-4.654h8.19l1.638 4.654h2.418l-6.838-18.59h-2.6l-6.864 18.59h2.418Zm9.074-6.734h-6.656l3.302-9.698h.052l3.302 9.698Zm10.252 6.734v-7.774h5.044c3.406 0 6.032-1.508 6.032-5.408 0-3.9-2.626-5.408-6.032-5.408h-7.384v18.59h2.34Zm5.304-9.854h-5.304v-6.656h5.304c2.314 0 3.432 1.066 3.432 3.328 0 2.262-1.118 3.328-3.432 3.328Zm11.474 9.854v-8.606h9.932v8.606h2.34v-18.59h-2.34v7.904h-9.932v-7.904h-2.34v18.59h2.34Zm23.954 0v-7.618l6.786-10.972h-2.522l-5.408 9.1h-.052l-5.382-9.1h-2.522l6.76 10.972v7.618h2.34Z"
                className={!hasStrapline ? 'hidden' : ''}
            />
            <path
                d="M43.508 158.84c7.347 0 13.807-1.33 19.38-3.99 5.573-2.66 9.88-6.333 12.92-11.02 3.04-4.687 4.56-10.07 4.56-16.15 0-6.46-1.583-11.748-4.75-15.865-3.167-4.117-6.935-7.283-11.305-9.5-4.37-2.217-10.165-4.528-17.385-6.935-5.7-1.9-10.102-3.578-13.205-5.035-3.103-1.457-5.7-3.357-7.79-5.7s-3.135-5.162-3.135-8.455c0-4.56 1.71-8.328 5.13-11.305 3.42-2.977 7.79-4.465 13.11-4.465 7.22 0 13.838 2.818 19.855 8.455C66.91 74.512 72.578 82.46 77.898 92.72l-3.8-26.6V62.7c-3.673-1.773-8.075-3.167-13.205-4.18C55.763 57.507 50.728 57 45.788 57c-7.22 0-13.648 1.33-19.285 3.99-5.637 2.66-10.038 6.333-13.205 11.02-3.167 4.687-4.75 9.943-4.75 15.77 0 5.953 1.552 10.862 4.655 14.725 3.103 3.863 6.777 6.84 11.02 8.93 4.243 2.09 9.848 4.338 16.815 6.745 5.827 2.027 10.323 3.768 13.49 5.225 3.167 1.457 5.858 3.388 8.075 5.795 2.217 2.407 3.325 5.383 3.325 8.93 0 5.067-1.742 9.215-5.225 12.445-3.483 3.23-8.012 4.845-13.585 4.845-6.333 0-12.318-1.9-17.955-5.7-5.637-3.8-10.482-8.55-14.535-14.25-4.053-5.7-7.22-11.463-9.5-17.29l4.94 32.3v3.61c4.813 1.393 10.26 2.533 16.34 3.42s11.78 1.33 17.1 1.33Zm88.254 0c7.22 0 13.712-1.678 19.475-5.035 5.763-3.357 10.513-8.233 14.25-14.63s6.302-14.028 7.695-22.895c-2.66 8.74-6.618 15.358-11.875 19.855s-11.748 6.745-19.475 6.745c-6.587 0-12.413-1.773-17.48-5.32-5.067-3.547-8.962-8.455-11.685-14.725-2.723-6.27-4.085-13.458-4.085-21.565 0-1.013.032-2.027.095-3.04s.095-2.027.095-3.04h61.56v-1.52c0-7.093-1.583-13.427-4.75-19s-7.663-9.912-13.49-13.015C146.265 58.552 139.68 57 132.332 57c-8.867 0-16.847 2.28-23.94 6.84-7.093 4.56-12.635 10.862-16.625 18.905-3.99 8.043-5.985 17.195-5.985 27.455 0 9.5 1.963 17.955 5.89 25.365 3.927 7.41 9.342 13.142 16.245 17.195 6.903 4.053 14.852 6.08 23.845 6.08Zm10.83-66.69h-33.44c1.14-9.627 3.832-17.353 8.075-23.18 4.243-5.827 9.278-8.74 15.105-8.74 3.167 0 6.048 1.108 8.645 3.325 2.597 2.217 4.592 5.162 5.985 8.835 1.393 3.673 2.09 7.663 2.09 11.97 0 2.533-.507 4.465-1.52 5.795s-2.66 1.995-4.94 1.995Zm96.233 66.69 34.96-13.68-12.54-3.61v-55.1c0-5.827-1.266-10.957-3.8-15.39-2.533-4.433-6.111-7.885-10.735-10.355-4.623-2.47-9.848-3.705-15.675-3.705-5.066 0-11.906 1.615-20.52 4.845-8.613 3.23-16.213 7.347-22.8 12.35-6.586 5.003-9.88 10.038-9.88 15.105 0 3.04.887 5.542 2.66 7.505 1.774 1.963 4.117 2.945 7.03 2.945 2.66 0 4.782-.728 6.365-2.185 1.584-1.457 2.692-3.262 3.325-5.415.634-2.153 1.33-5.13 2.09-8.93.76-4.18 1.647-7.537 2.66-10.07 1.014-2.533 2.597-4.497 4.75-5.89 3.42-2.28 7.347-3.42 11.78-3.42 5.954 0 10.83 2.185 14.63 6.555 3.8 4.37 5.7 9.975 5.7 16.815v9.12l-7.98 3.42c-11.02 4.687-20.045 8.803-27.075 12.35-7.03 3.547-13.015 7.568-17.955 12.065-4.94 4.497-7.41 9.342-7.41 14.535 0 5.953 2.09 10.798 6.27 14.535s9.564 5.605 16.15 5.605c6.46 0 12.857-1.963 19.19-5.89 6.334-3.927 12.604-9.31 18.81-16.15v22.04Zm-22.99-12.16c-4.56 0-8.233-1.393-11.02-4.18-2.786-2.787-4.18-6.397-4.18-10.83 0-4.56 1.615-8.708 4.845-12.445 3.23-3.737 7.569-7.093 13.015-10.07 5.447-2.977 12.224-6.175 20.33-9.595v32.87c-3.926 4.56-7.758 8.075-11.495 10.545-3.736 2.47-7.568 3.705-11.495 3.705Zm104.785 9.88-12.35-8.36V76.76c4.687-2.787 9.025-4.972 13.015-6.555 3.99-1.583 7.632-2.375 10.925-2.375 4.56 0 8.423 1.805 11.59 5.415 3.167 3.61 4.75 8.075 4.75 13.395v61.56l-12.54 8.36h46.74l-11.59-8.36V85.5c0-8.487-2.533-15.358-7.6-20.615C358.493 59.628 352.033 57 344.18 57c-3.8 0-8.487 1.425-14.06 4.275-5.573 2.85-12.16 6.682-19.76 11.495-.76.38-1.457.823-2.09 1.33V57l-35.91 15.77 13.3 5.51v69.92l-11.59 8.36h46.55Zm97.375-117.61V13.11h-25.65v25.84h25.65Zm11.59 117.61-11.97-8.36V57l-35.91 15.77 13.3 5.32v70.11l-11.78 8.36h46.36Zm39.043 2.28c7.347 0 13.807-1.33 19.38-3.99 5.573-2.66 9.88-6.333 12.92-11.02 3.04-4.687 4.56-10.07 4.56-16.15 0-6.46-1.583-11.748-4.75-15.865-3.167-4.117-6.935-7.283-11.305-9.5-4.37-2.217-10.165-4.528-17.385-6.935-5.7-1.9-10.102-3.578-13.205-5.035-3.103-1.457-5.7-3.357-7.79-5.7s-3.135-5.162-3.135-8.455c0-4.56 1.71-8.328 5.13-11.305 3.42-2.977 7.79-4.465 13.11-4.465 7.22 0 13.838 2.818 19.855 8.455 6.017 5.637 11.685 13.585 17.005 23.845l-3.8-26.6V62.7c-3.673-1.773-8.075-3.167-13.205-4.18-5.13-1.013-10.165-1.52-15.105-1.52-7.22 0-13.648 1.33-19.285 3.99-5.637 2.66-10.038 6.333-13.205 11.02-3.167 4.687-4.75 9.943-4.75 15.77 0 5.953 1.552 10.862 4.655 14.725 3.103 3.863 6.777 6.84 11.02 8.93 4.243 2.09 9.848 4.338 16.815 6.745 5.827 2.027 10.323 3.768 13.49 5.225 3.167 1.457 5.858 3.388 8.075 5.795 2.217 2.407 3.325 5.383 3.325 8.93 0 5.067-1.742 9.215-5.225 12.445-3.483 3.23-8.012 4.845-13.585 4.845-6.333 0-12.318-1.9-17.955-5.7-5.637-3.8-10.482-8.55-14.535-14.25-4.053-5.7-7.22-11.463-9.5-17.29l4.94 32.3v3.61c4.813 1.393 10.26 2.533 16.34 3.42s11.78 1.33 17.1 1.33Zm85.974-2.28-11.78-8.36V0l-35.91 15.77 13.11 5.32V148.2l-11.59 8.36h46.17Zm46.454 2.28c7.22 0 13.711-1.678 19.475-5.035 5.763-3.357 10.513-8.233 14.25-14.63 3.736-6.397 6.301-14.028 7.695-22.895-2.66 8.74-6.619 15.358-11.875 19.855-5.257 4.497-11.749 6.745-19.475 6.745-6.587 0-12.414-1.773-17.48-5.32-5.067-3.547-8.962-8.455-11.685-14.725-2.724-6.27-4.085-13.458-4.085-21.565 0-1.013.031-2.027.095-3.04.063-1.013.095-2.027.095-3.04h61.56v-1.52c0-7.093-1.584-13.427-4.75-19-3.167-5.573-7.664-9.912-13.49-13.015-5.827-3.103-12.414-4.655-19.76-4.655-8.867 0-16.847 2.28-23.94 6.84-7.094 4.56-12.635 10.862-16.625 18.905-3.99 8.043-5.985 17.195-5.985 27.455 0 9.5 1.963 17.955 5.89 25.365 3.926 7.41 9.341 13.142 16.245 17.195 6.903 4.053 14.851 6.08 23.845 6.08Zm10.83-66.69h-33.44c1.14-9.627 3.831-17.353 8.075-23.18 4.243-5.827 9.278-8.74 15.105-8.74 3.166 0 6.048 1.108 8.645 3.325 2.596 2.217 4.591 5.162 5.985 8.835 1.393 3.673 2.09 7.663 2.09 11.97 0 2.533-.507 4.465-1.52 5.795-1.014 1.33-2.66 1.995-4.94 1.995Zm66.973 118.75c9.12 0 18.557-2.217 28.31-6.65s17.892-10.26 24.415-17.48c6.523-7.22 9.785-14.757 9.785-22.61 0-5.953-2.248-10.608-6.745-13.965-4.497-3.357-10.418-5.035-17.765-5.035h-46.93c-3.293 0-5.985-.823-8.075-2.47-2.09-1.647-3.135-3.863-3.135-6.65 0-2.027.697-4.18 2.09-6.46 1.393-2.28 3.293-4.497 5.7-6.65 6.84 4.18 14.44 6.27 22.8 6.27 7.22 0 13.902-1.583 20.045-4.75 6.143-3.167 10.988-7.473 14.535-12.92 3.547-5.447 5.32-11.4 5.32-17.86 0-4.56-.823-8.867-2.47-12.92a38.242 38.242 0 0 0-6.84-11.02h20.52v-7.98h-22.61c-2.913 0-5.415-.19-7.505-.57-2.09-.38-4.338-.95-6.745-1.71-2.66-.887-5.003-1.52-7.03-1.9-2.027-.38-4.433-.57-7.22-.57-7.473 0-14.282 1.615-20.425 4.845-6.143 3.23-11.02 7.632-14.63 13.205-3.61 5.573-5.415 11.78-5.415 18.62 0 5.573 1.362 10.798 4.085 15.675 2.723 4.877 6.492 8.962 11.305 12.255-6.08 4.433-10.672 8.772-13.775 13.015-3.103 4.243-4.655 8.392-4.655 12.445 0 3.927 1.203 7.315 3.61 10.165 2.407 2.85 5.763 4.972 10.07 6.365v1.71c-6.46 1.773-11.843 4.433-16.15 7.98-4.307 3.547-6.46 7.663-6.46 12.35 0 4.687 1.837 8.962 5.51 12.825 3.673 3.863 8.708 6.903 15.105 9.12 6.397 2.217 13.522 3.325 21.375 3.325Zm10.45-84.74c-5.827 0-10.418-2.882-13.775-8.645-3.357-5.763-5.035-13.712-5.035-23.845 0-10.64 1.678-18.873 5.035-24.7 3.357-5.827 7.948-8.74 13.775-8.74 5.7 0 10.133 2.913 13.3 8.74 3.167 5.827 4.75 14.06 4.75 24.7 0 10.26-1.615 18.24-4.845 23.94-3.23 5.7-7.632 8.55-13.205 8.55Zm3.23 72.96c-7.093.127-13.458-.697-19.095-2.47-5.637-1.773-10.038-4.243-13.205-7.41s-4.75-6.713-4.75-10.64c0-3.927 1.488-7.125 4.465-9.595 2.977-2.47 7.188-3.705 12.635-3.705h45.22c4.813 0 8.36.887 10.64 2.66 2.28 1.773 3.42 4.307 3.42 7.6 0 4.18-1.71 8.043-5.13 11.59-3.42 3.547-8.107 6.397-14.06 8.55-5.953 2.153-12.667 3.293-20.14 3.42Zm91.105-40.28c7.22 0 13.712-1.678 19.475-5.035 5.763-3.357 10.513-8.233 14.25-14.63s6.302-14.028 7.695-22.895c-2.66 8.74-6.618 15.358-11.875 19.855s-11.748 6.745-19.475 6.745c-6.587 0-12.413-1.773-17.48-5.32-5.067-3.547-8.962-8.455-11.685-14.725-2.723-6.27-4.085-13.458-4.085-21.565 0-1.013.032-2.027.095-3.04s.095-2.027.095-3.04h61.56v-1.52c0-7.093-1.583-13.427-4.75-19s-7.663-9.912-13.49-13.015C798.147 58.552 791.56 57 784.214 57c-8.867 0-16.847 2.28-23.94 6.84-7.093 4.56-12.635 10.862-16.625 18.905-3.99 8.043-5.985 17.195-5.985 27.455 0 9.5 1.963 17.955 5.89 25.365 3.927 7.41 9.342 13.142 16.245 17.195 6.903 4.053 14.852 6.08 23.845 6.08Zm10.83-66.69h-33.44c1.14-9.627 3.832-17.353 8.075-23.18 4.243-5.827 9.278-8.74 15.105-8.74 3.167 0 6.048 1.108 8.645 3.325 2.597 2.217 4.592 5.162 5.985 8.835 1.393 3.673 2.09 7.663 2.09 11.97 0 2.533-.507 4.465-1.52 5.795s-2.66 1.995-4.94 1.995Zm78.943 64.41-12.35-8.36V76.76c4.687-2.787 9.025-4.972 13.015-6.555 3.99-1.583 7.632-2.375 10.925-2.375 4.56 0 8.423 1.805 11.59 5.415 3.167 3.61 4.75 8.075 4.75 13.395v61.56l-12.54 8.36h46.74l-11.59-8.36V85.5c0-8.487-2.533-15.358-7.6-20.615C911.29 59.628 904.83 57 896.977 57c-3.8 0-8.487 1.425-14.06 4.275-5.573 2.85-12.16 6.682-19.76 11.495-.76.38-1.457.823-2.09 1.33V57l-35.91 15.77 13.3 5.51v69.92l-11.59 8.36h46.55Zm136.895 2.85 35.15-14.25-12.35-3.8V0l-35.91 15.77 13.3 5.51-.19 42.94c-3.8-2.28-8.012-4.053-12.635-5.32a52.632 52.632 0 0 0-13.965-1.9c-9.5 0-17.923 2.217-25.27 6.65-7.347 4.433-13.047 10.64-17.1 18.62-4.053 7.98-6.08 17.29-6.08 27.93 0 9.5 1.678 17.923 5.035 25.27 3.357 7.347 8.043 13.078 14.06 17.195 6.017 4.117 13.015 6.175 20.995 6.175 4.433 0 9.437-1.425 15.01-4.275 5.573-2.85 12.033-6.618 19.38-11.305.127-.127.222-.19.285-.19.063 0 .158-.063.285-.19v16.53Zm-22.04-11.21c-5.7 0-10.767-1.837-15.2-5.51s-7.853-8.898-10.26-15.675c-2.407-6.777-3.61-14.598-3.61-23.465 0-8.613 1.108-16.182 3.325-22.705s5.383-11.59 9.5-15.2c4.117-3.61 8.835-5.415 14.155-5.415 6.46 0 11.938 2.818 16.435 8.455 4.497 5.637 7.062 12.825 7.695 21.565v49.59c-4.307 2.66-8.36 4.718-12.16 6.175-3.8 1.457-7.093 2.185-9.88 2.185Z"
                fill="currentColor"
            />
        </g>
    </svg>
);

export default Logo;
