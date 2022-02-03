import React from "react";
import Section from "../components/Section";

const Footer = () => (
  <Section className="flex flex-col items-center justify-between px-4 py-8 pr-8 text-center border-t sm:px-6 sm:text-left sm:py-6 sm:flex-row border-gold bg-gold dark:bg-gray-900 dark:border-orange-light">
    <div>
      <p className="mb-6 text-base sm:mb-0">
        Designed, written, and built by{" "}
        <a
          className="font-semibold underline focus:outline-none focus:ring focus:ring-orange rounded"
          href="mailto:saundersbd@gmail.com"
        >
          Brian Saunders
        </a>
        , a designer from Chicago.
      </p>
    </div>

    <svg
      width="256"
      height="172"
      viewBox="0 0 256 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-auto"
    >
      <path
        d="M24.0285 137.684C34.7435 139.609 50.1527 142.376 56.0935 142.376C59.6738 142.376 63.654 141.068 68.9521 138.903C66.6855 137.67 63.8525 136.466 60.5062 135.609C59.7274 135.409 59.4402 134.427 60.0141 133.865C63.1472 130.798 67.1807 126.768 69.4976 124.441C69.9032 124.034 70.5686 124.05 70.9538 124.477L79.8197 134.3C82.5448 133.152 85.5388 131.919 88.8523 130.625L82.9524 124.487C82.4361 123.95 82.6681 123.062 83.3865 122.862C86.426 122.015 91.2089 120.88 94.0984 120.88C97.353 120.88 99.1151 122.865 101.714 125.928C103.189 125.426 104.713 124.92 106.288 124.411L127.773 102.978C128.501 102.251 129.663 102.194 130.46 102.846L133.493 105.327C133.906 105.665 134.513 105.619 134.871 105.224L143.959 95.1928C144.649 94.4701 146.195 93.1899 146.857 93.8507C147.685 94.6766 147.788 97.4643 143.959 101.697C146.936 101.697 149.53 103.915 150.618 105.204C150.728 105.333 150.891 105.404 151.061 105.398C152.339 105.351 154.76 105.661 156.068 107.273C157.827 109.441 183.701 110.576 185.46 110.576C187.219 110.576 189.082 109.131 189.289 107.273C189.496 105.414 184.425 55.7529 161.243 7.94997C158.161 1.4175 151.685 3.61311 149.622 4.31219C149.468 4.36445 149.339 4.40834 149.237 4.4396C142.356 6.55809 135.747 9.67259 128.425 13.1228C114.78 19.5531 98.6597 27.1495 73.6906 31.6372C73.229 34.4316 70.1521 36.5912 66.4252 36.5912C63.6628 36.5912 61.2575 35.4047 60.0096 33.6528C49.9297 34.8302 38.5791 35.5166 25.6664 35.5166C22.9326 35.5166 18.5017 36.8934 14.96 37.9939C12.6022 38.7266 10.6385 39.3367 9.83195 39.3367C8.48647 39.3367 6.72729 39.3367 6.72729 38.3043C6.72729 36.2393 10.867 34.7423 14.9033 34.1228C17.4386 33.7337 17.7491 33.142 17.4386 32.2128C17.1055 31.2158 9.36637 32.7806 6.72729 34.3809C5.58913 35.0711 4.65743 34.6907 4.39869 34.1228C3.87002 32.9625 6.35148 31.9355 8.56665 31.0188C9.99798 30.4264 11.3181 29.8801 11.6432 29.3735C12.2441 28.437 11.0738 27.6699 9.83195 28.2378C9.45145 28.4118 9.0321 28.6681 8.58728 28.9401C7.58025 29.5557 6.44266 30.2511 5.33001 30.2511C3.72586 30.2511 3.31189 28.8573 3.31189 28.2378C3.31189 27.6183 4.76069 25.2953 14.6443 25.2953C20.3084 25.2953 21.8428 27.5671 23.1529 29.5069C24.1289 30.952 24.9805 32.2128 27.3222 32.2128C38.9216 32.2128 49.4675 31.5763 59.1221 30.4623C59.4147 27.5312 62.5726 25.2236 66.4252 25.2236C69.3317 25.2236 71.8428 26.537 73.0265 28.4406C102.11 23.3052 122.348 13.8274 139.598 5.74899L139.599 5.74848L139.604 5.74617C142.077 4.58791 144.489 3.45843 146.857 2.37466C148.582 1.5831 153.841 0 157.07 0C168.487 0 193.773 79.9125 193.773 107.273C193.773 111.289 202.945 110.712 213.902 109.26L216.977 106.055C217.188 105.836 217.544 105.852 217.732 106.091L219.611 108.462C220.316 108.36 221.023 108.257 221.73 108.154C222.861 107.99 223.993 107.825 225.118 107.664L227.866 104.375C228.072 104.128 228.455 104.136 228.66 104.385C229.391 105.273 230.504 106.452 231.087 106.452C231.449 106.452 231.715 106.585 231.9 106.749C232.109 106.723 232.317 106.698 232.524 106.673L233.871 104.375C234.022 104.117 234.364 104.048 234.59 104.245C235.158 104.739 235.877 105.487 236.285 106.268C237.226 106.18 238.138 106.107 239.016 106.052C239.566 105.017 240.412 103.73 241.446 102.856C241.701 102.64 242.082 102.773 242.206 103.083C242.241 103.17 242.277 103.257 242.312 103.342C242.604 104.05 242.885 104.733 242.828 105.934C248.54 106.07 253.441 109.544 255.725 111.781C256.093 112.141 256.086 112.723 255.736 113.1L250.658 118.582C250.307 118.96 249.726 119.011 249.315 118.698L247.866 117.597C247.362 119.275 245.422 123.627 241.643 127.901C241.456 128.112 241.189 128.232 240.906 128.228C238.48 128.185 234.612 127.816 230.27 127.402C224.254 126.828 217.328 126.167 212.058 126.167C204.606 126.167 182.39 133.876 172.213 137.73C174.938 138.281 181.403 139.382 185.46 139.382C187.946 139.382 192.869 138.191 197.888 136.977C203.108 135.714 208.433 134.426 211.23 134.426C215.157 134.426 221.423 137.073 224.921 138.813C225.495 139.098 225.634 139.843 225.217 140.328L220.822 145.442C220.587 145.717 220.223 145.842 219.866 145.779C212.952 144.555 197.595 144.322 190.635 145.37C185.755 145.677 173.964 147.215 165.455 150.926C165.271 151.006 165.072 151.03 164.874 150.999C158.407 150.011 148.071 153.248 143.444 155.095C143.303 155.151 143.164 155.174 143.013 155.164C131.407 154.413 103.856 153.166 83.8289 154.016L72.5776 165.74C72.1901 166.144 71.5459 166.152 71.1482 165.759L64.3772 159.053C63.8825 158.564 64.0212 157.722 64.6311 157.385C65.7031 156.794 67.1992 155.895 69.0009 154.681C57.4617 155.249 55.4132 155.707 45.33 158.379C32.0829 161.89 24.9419 164.677 19.4567 168.394C16.387 170.474 15.6455 171.31 15.3293 171.732C15.14 171.984 14.8284 172.058 14.5295 171.956C9.39633 170.201 0 164.449 0 154.043C0 143.438 8.48089 137.6 12.8779 135.932C12.9874 135.891 13.0799 135.87 13.1969 135.877C14.3709 135.949 18.5965 136.708 24.0285 137.684Z"
        fill="currentColor"
        className="text-white dark:text-gray-400"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.0285 137.684C34.7435 139.609 50.1527 142.376 56.0935 142.376C59.6738 142.376 63.654 141.068 68.9521 138.903C66.6855 137.67 63.8525 136.466 60.5062 135.609C59.7274 135.409 59.4402 134.427 60.0141 133.865C63.1472 130.798 67.1807 126.768 69.4976 124.441C69.9032 124.034 70.5686 124.05 70.9538 124.477L79.8197 134.3C82.5448 133.152 85.5388 131.919 88.8523 130.625L82.9524 124.487C82.4361 123.95 82.6681 123.062 83.3865 122.862C86.426 122.015 91.2089 120.88 94.0984 120.88C97.353 120.88 99.1151 122.865 101.714 125.928C103.189 125.426 104.713 124.92 106.288 124.411L127.773 102.978C128.501 102.251 129.663 102.194 130.46 102.846L133.493 105.327C133.906 105.665 134.513 105.619 134.871 105.224L143.959 95.1928C144.649 94.4701 146.195 93.1899 146.857 93.8507C147.685 94.6766 147.788 97.4643 143.959 101.697C146.936 101.697 149.53 103.915 150.618 105.204C150.728 105.333 150.891 105.404 151.061 105.398C152.339 105.351 154.76 105.661 156.068 107.273C157.827 109.441 183.701 110.576 185.46 110.576C187.219 110.576 189.082 109.131 189.289 107.273C189.496 105.414 184.425 55.7529 161.243 7.94997C158.161 1.4175 151.685 3.61311 149.622 4.31219C149.468 4.36445 149.339 4.40834 149.237 4.4396C142.356 6.55809 135.747 9.67259 128.425 13.1228C114.78 19.5531 98.6597 27.1495 73.6906 31.6372C73.229 34.4316 70.1521 36.5912 66.4252 36.5912C63.6628 36.5912 61.2575 35.4047 60.0096 33.6528C49.9297 34.8302 38.5791 35.5166 25.6664 35.5166C22.9326 35.5166 18.5017 36.8934 14.96 37.9939C12.6022 38.7266 10.6385 39.3367 9.83195 39.3367C8.48647 39.3367 6.72729 39.3367 6.72729 38.3043C6.72729 36.2393 10.867 34.7423 14.9033 34.1228C17.4386 33.7337 17.7491 33.142 17.4386 32.2128C17.1055 31.2158 9.36637 32.7806 6.72729 34.3809C5.58913 35.0711 4.65743 34.6907 4.39869 34.1228C3.87002 32.9625 6.35148 31.9355 8.56665 31.0188C9.99798 30.4264 11.3181 29.8801 11.6432 29.3735C12.2441 28.437 11.0738 27.6699 9.83195 28.2378C9.45145 28.4118 9.0321 28.6681 8.58728 28.9401C7.58025 29.5557 6.44266 30.2511 5.33001 30.2511C3.72586 30.2511 3.31189 28.8573 3.31189 28.2378C3.31189 27.6183 4.76069 25.2953 14.6443 25.2953C20.3084 25.2953 21.8428 27.5671 23.1529 29.5069C24.1289 30.952 24.9805 32.2128 27.3222 32.2128C38.9216 32.2128 49.4675 31.5763 59.1221 30.4623C59.4147 27.5312 62.5726 25.2236 66.4252 25.2236C69.3317 25.2236 71.8428 26.537 73.0265 28.4406C102.11 23.3052 122.348 13.8274 139.598 5.74899L139.599 5.74848L139.604 5.74617C142.077 4.58791 144.489 3.45843 146.857 2.37466C148.582 1.5831 153.841 0 157.07 0C168.487 0 193.773 79.9125 193.773 107.273C193.773 111.289 202.945 110.712 213.902 109.26L216.977 106.055C217.188 105.836 217.544 105.852 217.732 106.091L219.611 108.462C220.316 108.36 221.023 108.257 221.73 108.154C222.861 107.99 223.993 107.825 225.118 107.664L227.866 104.375C228.072 104.128 228.455 104.136 228.66 104.385C229.391 105.273 230.504 106.452 231.087 106.452C231.449 106.452 231.715 106.585 231.9 106.749C232.109 106.723 232.317 106.698 232.524 106.673L233.871 104.375C234.022 104.117 234.364 104.048 234.59 104.245C235.158 104.739 235.877 105.487 236.285 106.268C237.226 106.18 238.138 106.107 239.016 106.052C239.566 105.017 240.412 103.73 241.446 102.856C241.701 102.64 242.082 102.773 242.206 103.083C242.241 103.17 242.277 103.257 242.312 103.342C242.604 104.05 242.885 104.733 242.828 105.934C248.54 106.07 253.441 109.544 255.725 111.781C256.093 112.141 256.086 112.723 255.736 113.1L250.658 118.582C250.307 118.96 249.726 119.011 249.315 118.698L247.866 117.597C247.362 119.275 245.422 123.627 241.643 127.901C241.456 128.112 241.189 128.232 240.906 128.228C238.48 128.185 234.612 127.816 230.27 127.402C224.254 126.828 217.328 126.167 212.058 126.167C204.606 126.167 182.39 133.876 172.213 137.73C174.938 138.281 181.403 139.382 185.46 139.382C187.946 139.382 192.869 138.191 197.888 136.977C203.108 135.714 208.433 134.426 211.23 134.426C215.157 134.426 221.423 137.073 224.921 138.813C225.495 139.098 225.634 139.843 225.217 140.328L220.822 145.442C220.587 145.717 220.223 145.842 219.866 145.779C212.952 144.555 197.595 144.322 190.635 145.37C185.755 145.677 173.964 147.215 165.455 150.926C165.271 151.006 165.072 151.03 164.874 150.999C158.407 150.011 148.071 153.248 143.444 155.095C143.303 155.151 143.164 155.174 143.013 155.164C131.407 154.413 103.856 153.166 83.8289 154.016L72.5776 165.74C72.1901 166.144 71.5459 166.152 71.1482 165.759L64.3772 159.053C63.8825 158.564 64.0212 157.722 64.6311 157.385C65.7031 156.794 67.1992 155.895 69.0009 154.681C57.4617 155.249 55.4132 155.707 45.33 158.379C32.0829 161.89 24.9419 164.677 19.4567 168.394C16.387 170.474 15.6455 171.31 15.3293 171.732C15.14 171.984 14.8284 172.058 14.5295 171.956C9.39633 170.201 0 164.449 0 154.043C0 143.438 8.48089 137.6 12.8779 135.932C12.9874 135.891 13.0799 135.87 13.1969 135.877C14.3709 135.949 18.5965 136.708 24.0285 137.684ZM152.325 118.569C153.12 118.569 153.765 117.688 153.765 116.602C153.765 115.515 153.12 114.634 152.325 114.634C151.529 114.634 150.885 115.515 150.885 116.602C150.885 117.688 151.529 118.569 152.325 118.569ZM99.2523 135.272C93.9994 132.546 89.2849 127.94 86.6306 124.383C86.5206 124.235 86.6056 124.028 86.7875 123.999C89.7415 123.518 95.2459 123.12 95.6949 123.097C95.7342 123.096 95.7785 123.091 95.8281 123.086C96.3714 123.034 97.5479 122.921 99.6705 125.096C103.876 129.47 106.434 132.925 107.533 135.083C105.002 132.423 100.334 128.434 97.8235 126.377C100.86 129.614 106.908 136.208 106.808 136.682C106.683 137.276 105.931 137.245 105.556 136.682C103.598 133.869 99.0276 129.947 96.002 127.555C95.8567 127.44 95.683 127.634 95.8104 127.768C98.5347 130.642 102.318 134.852 102.488 135.933C100.235 135.212 96.2899 131.261 93.8207 128.517C93.6978 128.38 93.4923 128.533 93.5934 128.686C95.3774 131.39 97.3479 133.564 99.2523 135.272ZM73.6495 138.243L72.6852 138.69C72.5298 138.762 72.3471 138.749 72.2025 138.657C68.7203 136.444 66.7601 135.457 63.6948 134.292C63.5235 134.227 63.4764 134.006 63.6074 133.878L66.0913 131.454C67.9485 132.693 71.2549 135.253 73.6495 138.243ZM74.7035 137.754C72.8932 135.573 69.8047 132.182 67.2036 130.369L68.499 129.105C70.3862 130.686 73.6597 133.861 75.6696 137.306L74.7035 137.754ZM76.7292 136.815C75.2708 134.56 72.2386 130.323 69.5936 128.037L70.16 127.484C70.3484 127.3 70.6464 127.292 70.838 127.472C73.1099 129.613 76.4354 133.768 78.0409 135.875C78.1374 136.002 78.0907 136.183 77.9462 136.25L76.7292 136.815ZM3.47237 153.217C4.50798 153.494 5.80758 153.54 6.53946 153.297C10.564 152.187 15.462 152.24 17.6724 152.263C18.0754 152.267 18.389 152.271 18.5917 152.266C19.9065 152.235 20.9082 150.423 19.3117 150.423C14.4656 150.423 8.10391 149.379 4.36318 148.76C3.77153 150.406 3.54646 151.935 3.47237 153.217ZM5.33318 146.606C7.51513 147.606 12.0319 148.425 16.2752 148.425C20.6222 148.425 20.6052 147.709 20.596 147.319C20.5956 147.302 20.5952 147.285 20.5952 147.269C20.5952 146.895 20.4387 146.395 19.7813 146.395C15.5871 146.395 9.27925 145.764 6.07679 145.383C5.80171 145.793 5.55478 146.201 5.33318 146.606ZM7.25157 143.833C11.4082 144.689 17.1431 145.043 21.8161 144.896C20.2315 144.621 13.647 142.592 9.77292 141.366C8.78903 142.177 7.9562 143.004 7.25157 143.833ZM11.4031 140.135C28.9024 146.125 34.9923 146.395 37.7813 146.395C39.3939 146.395 41.6134 146.311 43.2912 146.233C43.2948 145.44 43.3275 144.645 43.3979 143.861C43.4225 143.587 43.2221 143.34 42.9478 143.309C30.6809 141.908 23.2544 140.793 13.7068 138.844C13.5875 138.82 13.4597 138.841 13.3543 138.901C12.6563 139.305 12.0071 139.717 11.4031 140.135ZM40.6421 157.446C23.9986 157.476 13.9687 163.031 10.3255 166.408C11.5677 167.264 12.8646 167.994 14.112 168.64C14.286 168.73 14.4952 168.709 14.6501 168.589C22.7341 162.33 33.8129 158.943 40.6421 157.446ZM8.84392 165.298C10.0879 164.073 12.2667 162.734 13.364 162.135C12.3309 161.906 9.85777 161.522 8.23005 161.822C7.30352 161.993 6.72518 162.421 6.38536 162.853C7.11987 163.762 7.95428 164.571 8.84392 165.298ZM4.38175 159.463C5.6504 160.065 6.60464 160.166 7.30132 160.24C7.6863 160.28 7.99278 160.313 8.23005 160.417C8.88744 160.167 11.8927 160.042 14.8353 160.417C16.7417 159.489 18.5445 159.25 19.9745 159.061C20.4697 158.996 20.9208 158.936 21.3153 158.855C22.8494 158.543 22.7553 157.606 21.8161 157.45C17.629 156.994 15.4321 157.204 13.9051 157.351C13.343 157.405 12.8713 157.45 12.4248 157.45C11.7045 157.45 11.0313 157.203 10.2695 156.923C9.27684 156.558 8.13367 156.138 6.53946 156.138C5.36308 156.138 4.36296 156.331 3.60139 156.566C3.7583 157.609 4.02533 158.572 4.38175 159.463ZM67.7571 157.987L73.5895 153.658C73.7111 153.568 73.8657 153.537 74.0139 153.569C74.3148 153.633 74.7439 153.708 75.253 153.784C73.6445 155.145 71.1034 157.277 70.1826 157.983C70.0554 158.081 70.0425 158.272 70.1633 158.378C70.3992 158.583 70.6321 158.766 70.7986 158.891C70.8941 158.962 71.0259 158.953 71.1126 158.871C72.3419 157.71 74.837 155.385 76.4944 153.949C76.8346 153.99 77.189 154.029 77.5488 154.064C75.9877 155.61 73.4838 158.082 72.7068 158.819C72.5968 158.923 72.5994 159.101 72.7154 159.199C72.8366 159.301 72.966 159.407 73.0741 159.495C73.1735 159.576 73.3177 159.567 73.4077 159.476C74.8899 157.98 77.517 155.329 78.6794 154.16C79.1238 154.191 79.5626 154.214 79.9796 154.225C80.1967 154.231 80.3104 154.489 80.1633 154.649C78.0871 156.897 74.6581 160.334 72.2727 162.43C72.0944 162.586 71.8311 162.594 71.647 162.444C70.4165 161.442 68.7089 159.764 67.6961 158.731C67.4855 158.516 67.5153 158.166 67.7571 157.987ZM27.3571 148.331C25.028 148.331 22.2545 149.601 21.1588 150.236C22.9746 150.063 26.5548 149.924 27.3571 150.049C28.5633 150.237 31.1762 150.455 33.1797 150.455C35.1832 150.455 36.9363 149.393 38.1571 148.144C36.6232 148.55 34.1189 148.862 32.898 148.862C32.4182 148.862 31.9093 148.78 31.2917 148.68C30.3378 148.527 29.1241 148.331 27.3571 148.331ZM15.1796 153.515C13.3515 153.515 9.30484 154.473 7.51005 154.952C9.41962 155.17 11.204 155.576 13.3014 156.326C14.6788 155.857 19.124 155.514 22.5988 156.076C25.1032 154.177 32.8041 153.578 36.3415 153.515C37.4371 152.453 39.9728 151.766 42.0389 151.548C38.1571 151.017 35.3084 151.485 33.2423 151.922C26.1895 151.922 23.7366 152.889 22.3848 153.422C21.8706 153.625 21.5157 153.765 21.1275 153.765C20.5081 153.765 19.7253 153.717 18.8483 153.663C17.7309 153.594 16.4597 153.515 15.1796 153.515ZM23.8823 157.263C25.3536 156.461 29.3355 154.908 33.4928 155.108C32.6042 155.33 31.9972 155.731 31.3659 156.149C30.7518 156.555 30.1146 156.977 29.1728 157.263C28.4527 157.481 25.1449 157.7 23.8823 157.263Z"
        fill="currentColor"
        className="text-navy-dark dark:text-navy"
      />
      <path
        d="M205.113 113.82L205.11 113.821C205.006 113.849 204.88 113.888 204.737 113.935C204.449 114.03 204.062 114.168 203.592 114.342C202.649 114.691 201.35 115.196 199.795 115.824C196.684 117.08 192.537 118.831 188.148 120.814C183.76 122.797 179.124 125.017 175.039 127.209C170.974 129.39 167.406 131.57 165.18 133.483C164.136 134.319 162.561 135.111 161.109 135.727C159.656 136.344 158.413 136.749 158.09 136.83C158.042 136.842 157.957 136.859 157.842 136.881C157.311 136.986 156.146 137.216 155.093 137.674C153.822 138.225 152.325 139.27 152.325 141.179C152.325 142.958 153.369 144.134 154.496 144.83C155.601 145.512 156.88 145.801 157.646 145.801C158.025 145.801 158.553 145.733 159.117 145.646C159.527 145.583 159.987 145.505 160.466 145.423C160.661 145.39 160.86 145.356 161.058 145.323C162.463 145.086 163.919 144.865 164.972 144.865C165.985 144.865 168.084 145.138 170.388 145.437L170.736 145.483C173.116 145.792 175.648 146.114 177.118 146.114C177.533 146.114 177.869 145.778 177.869 145.364C177.869 144.95 177.533 144.615 177.118 144.615C175.77 144.615 173.356 144.312 170.931 143.996L170.487 143.939C168.268 143.65 166.087 143.366 164.972 143.366C163.771 143.366 162.19 143.612 160.809 143.844C160.601 143.879 160.398 143.914 160.2 143.948C159.727 144.028 159.285 144.104 158.888 144.165C158.313 144.253 157.894 144.302 157.646 144.302C157.161 144.302 156.155 144.092 155.287 143.556C154.442 143.034 153.827 142.274 153.827 141.179C153.827 140.216 154.553 139.543 155.692 139.048C156.564 138.67 157.45 138.492 158.029 138.375C158.201 138.34 158.345 138.311 158.455 138.284C158.884 138.177 160.207 137.739 161.697 137.107C163.183 136.476 164.921 135.616 166.132 134.643L166.142 134.635L166.151 134.627C168.245 132.825 171.693 130.706 175.751 128.529C177.803 127.428 179.999 126.318 182.236 125.233C182.385 125.161 182.561 125.167 182.705 125.25L184.151 126.084C184.297 126.167 184.482 126.087 184.52 125.924L184.938 124.153C184.973 124.004 185.074 123.88 185.212 123.815C185.605 123.631 185.998 123.449 186.39 123.267C186.511 123.211 186.651 123.206 186.776 123.253L188.37 123.852C188.5 123.901 188.646 123.834 188.693 123.704L189.274 122.117C189.32 121.99 189.415 121.888 189.538 121.833C189.76 121.733 189.982 121.634 190.202 121.536C190.376 121.458 190.578 121.486 190.725 121.606L192.799 123.312C192.95 123.436 193.18 123.347 193.206 123.153L193.614 120.166C193.625 120.081 193.68 120.009 193.759 119.975C193.849 119.936 193.953 119.955 194.024 120.022L196.001 121.903C196.152 122.046 196.401 121.955 196.423 121.748L196.709 118.999C196.728 118.818 196.845 118.661 197.013 118.59C197.244 118.494 197.472 118.399 197.696 118.305C197.885 118.227 198.102 118.271 198.245 118.415L199.756 119.942C199.922 120.11 200.207 119.977 200.184 119.743L199.99 117.748C199.968 117.528 200.094 117.32 200.3 117.237C200.319 117.229 200.339 117.221 200.359 117.214C200.749 117.056 201.123 116.906 201.478 116.765C201.66 116.693 201.866 116.733 202.008 116.867L203.179 117.979C203.333 118.125 203.589 118.025 203.601 117.812L203.693 116.222C203.704 116.025 203.831 115.853 204.016 115.784C204.049 115.771 204.082 115.759 204.115 115.747C204.578 115.576 204.946 115.445 205.208 115.359C205.34 115.315 205.438 115.286 205.505 115.267C205.524 115.262 205.543 115.26 205.562 115.261C205.765 115.275 205.949 115.335 206.104 115.413C206.286 115.504 206.397 115.606 206.424 115.635C206.701 115.943 207.177 115.968 207.485 115.691C207.793 115.414 207.818 114.94 207.541 114.632C207.248 114.308 206.494 113.76 205.48 113.76C205.335 113.76 205.182 113.802 205.113 113.82Z"
        fill="currentColor"
        className="text-white dark:text-gray-400"
      />
      <ellipse
        cx="66.4253"
        cy="30.9074"
        rx="4.44527"
        ry="3.44917"
        fill="#EB7C7C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.6493 8.64534C76.9286 8.01419 76.6421 7.27668 76.0095 6.99807C75.3768 6.71945 74.6376 7.00524 74.3583 7.63638L68.2226 21.5024C67.9433 22.1335 68.2298 22.871 68.8624 23.1496C69.4951 23.4283 70.2344 23.1425 70.5137 22.5113L76.6493 8.64534ZM63.7218 7.02421C64.4092 6.94872 65.0278 7.44343 65.1035 8.1292L66.6061 21.7454C66.6818 22.4311 66.1859 23.0482 65.4985 23.1237C64.8111 23.1992 64.1925 22.7045 64.1168 22.0188L62.6142 8.4026C62.5385 7.71683 63.0344 7.09971 63.7218 7.02421ZM53.5023 9.94153C53.116 9.3693 52.3379 9.21783 51.7643 9.60321C51.1907 9.98859 51.0388 10.7649 51.4251 11.3371L59.6895 23.5792C60.0758 24.1514 60.854 24.3029 61.4276 23.9175C62.0012 23.5321 62.153 22.7558 61.7667 22.1836L53.5023 9.94153ZM42.1324 14.4675C41.5547 14.0883 40.7782 14.2481 40.3981 14.8245C40.018 15.4008 40.1783 16.1755 40.756 16.5546L55.0308 25.9236C55.6086 26.3027 56.3851 26.1429 56.7652 25.5665C57.1452 24.9902 56.985 24.2156 56.4073 23.8364L42.1324 14.4675ZM86.3692 14.0999C86.8047 14.6359 86.7222 15.4225 86.1849 15.8569L74.2892 25.4757C73.752 25.9101 72.9634 25.8278 72.528 25.2918C72.0925 24.7558 72.1751 23.9692 72.7123 23.5348L84.608 13.916C85.1452 13.4816 85.9338 13.5639 86.3692 14.0999ZM55.7647 38.8355C56.2984 38.3967 56.3745 37.6094 55.9346 37.0771C55.4948 36.5447 54.7056 36.4688 54.1719 36.9076L42.7771 46.2765C42.2434 46.7153 42.1674 47.5026 42.6072 48.0349C43.0471 48.5673 43.8362 48.6432 44.3699 48.2044L55.7647 38.8355ZM62.2636 40.4891C62.8892 40.7831 63.1575 41.5274 62.8627 42.1515L56.727 55.1431C56.4323 55.7672 55.6862 56.0348 55.0606 55.7407C54.435 55.4467 54.1668 54.7024 54.4615 54.0783L60.5972 41.0867C60.892 40.4626 61.6381 40.195 62.2636 40.4891ZM68.6153 40.3012C68.5772 39.6123 67.9866 39.0847 67.2961 39.1226C66.6056 39.1606 66.0767 39.7498 66.1147 40.4387L66.9913 56.3034C67.0293 56.9922 67.6199 57.5199 68.3104 57.4819C69.001 57.4439 69.5299 56.8547 69.4918 56.1659L68.6153 40.3012ZM71.2022 40.0299C71.7362 39.5916 72.5253 39.668 72.9647 40.2007L82.8569 52.193C83.2964 52.7257 83.2197 53.5129 82.6857 53.9513C82.1517 54.3897 81.3626 54.3132 80.9232 53.7805L71.0309 41.7883C70.5915 41.2556 70.6682 40.4683 71.2022 40.0299ZM78.5969 35.596C78.0286 35.2028 77.2485 35.3435 76.8543 35.9104C76.4601 36.4773 76.6012 37.2556 77.1694 37.6488L91.0686 47.2676C91.6369 47.6608 92.417 47.5201 92.8112 46.9532C93.2054 46.3863 93.0643 45.608 92.4961 45.2148L78.5969 35.596Z"
        fill="currentColor"
        className="text-white dark:text-gray-400"
      />
    </svg>
  </Section>
);

export default Footer;
