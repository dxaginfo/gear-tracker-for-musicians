import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  Typography, 
  Button, 
  Chip, 
  Box, 
  IconButton, 
  Tooltip 
} from '@mui/material';
import { 
  Edit as EditIcon, 
  Delete as DeleteIcon, 
  Visibility as ViewIcon,
  MoreVert as MoreIcon,
  LocationOn as LocationIcon,
  Build as MaintenanceIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { formatCurrency, formatDate } from '../../utils/formatters';

const EquipmentCard = ({ equipment, onDelete }) => {
  const { 
    id, 
    name, 
    description, 
    images, 
    serialNumber, 
    model, 
    manufacturer,
    purchaseDate,
    purchasePrice,
    currentValue,
    category,
    status,
    location
  } = equipment;

  const primaryImage = images?.find(img => img.isPrimary)?.imageUrl || 
    images?.[0]?.imageUrl || 
    'https://via.placeholder.com/300x200?text=No+Image';

  const statusColors = {
    ACTIVE: 'success',
    MAINTENANCE: 'warning',
    LOST: 'error',
    SOLD: 'default'
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={primaryImage}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Chip 
            label={status} 
            color={statusColors[status] || 'default'} 
            size="small" 
          />
        </Box>

        {manufacturer && model && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {manufacturer} {model}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description.length > 120 ? `${description.substring(0, 120)}...` : description}
          </Typography>
        )}

        <Box display="flex" flexDirection="column" gap={0.5}>
          {serialNumber && (
            <Typography variant="body2" color="text.secondary">
              <strong>Serial:</strong> {serialNumber}
            </Typography>
          )}
          
          {category && (
            <Typography variant="body2" color="text.secondary">
              <strong>Category:</strong> {category.name}
            </Typography>
          )}

          {purchaseDate && (
            <Typography variant="body2" color="text.secondary">
              <strong>Purchased:</strong> {formatDate(purchaseDate)}
            </Typography>
          )}

          {location && (
            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationIcon color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {location.name}
              </Typography>
            </Box>
          )}
        </Box>

        {(purchasePrice || currentValue) && (
          <Box display="flex" justifyContent="space-between" mt={2}>
            {purchasePrice && (
              <Typography variant="body2" color="text.secondary">
                <strong>Purchase:</strong> {formatCurrency(purchasePrice)}
              </Typography>
            )}
            {currentValue && (
              <Typography variant="body2" color={currentValue > purchasePrice ? 'success.main' : 'text.secondary'}>
                <strong>Value:</strong> {formatCurrency(currentValue)}
              </Typography>
            )}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box>
          <Tooltip title="View Details">
            <IconButton 
              component={Link} 
              to={`/equipment/${id}`} 
              aria-label="view"
              color="primary"
              size="small"
            >
              <ViewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Equipment">
            <IconButton 
              component={Link} 
              to={`/equipment/${id}/edit`} 
              aria-label="edit"
              color="secondary"
              size="small"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Maintenance History">
            <IconButton 
              component={Link} 
              to={`/equipment/${id}/maintenance`} 
              aria-label="maintenance"
              color="info"
              size="small"
            >
              <MaintenanceIcon />
            </IconButton>
          </Tooltip>
        </Box>
        
        <Box>
          <Tooltip title="Delete Equipment">
            <IconButton 
              onClick={() => onDelete(id)} 
              aria-label="delete"
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More Options">
            <IconButton aria-label="more options" size="small">
              <MoreIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
};

export default EquipmentCard;