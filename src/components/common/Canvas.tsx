import { FluentProvider, webLightTheme, Card, Button } from '@fluentui/react-components';

export const Canvas: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="flex w-full flex-col">
        <div className="w-full mb-4">
          <Card>
            {/* Full width content */}
          </Card>
        </div>
        <div className="flex w-full gap-4">
          <Card className="flex-1">
            <Button appearance="primary" className="w-full">
              Eins
            </Button>
          </Card>
          <Card className="flex-1">
            <Button appearance="primary" className="w-full">
              Zwei
            </Button>
          </Card>
          <Card className="flex-1">
            <Button appearance="primary" className="w-full">
              Drei
            </Button>
          </Card>
        </div>
      </div>
    </FluentProvider>
  );
};