import React from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Card className="w-96 bg-surface">
            <CardBody>
              <h2 className="text-2xl font-bold text-primary-500 mb-4">
                Oops! Something went wrong.
              </h2>
              <p className="text-text-secondary mb-4">
                We're sorry for the inconvenience. Please try refreshing the
                page or contact support if the problem persists.
              </p>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
