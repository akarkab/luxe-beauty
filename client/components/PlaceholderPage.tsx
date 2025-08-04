import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8 text-rose-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Cette page est en cours de développement. 
            Continuez à explorer ou contactez-nous pour plus d'informations.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
